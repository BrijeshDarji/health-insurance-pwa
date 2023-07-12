import * as Yup from "yup"

import OutlinedSelect from "../components/form_components/OutlinedSelect";
import OutlinedTextInput from "../components/form_components/OutlinedTextInput";
import OutlinedRadioButton from "../components/form_components/OutlinedRadioButton";

import { PhoneGroup } from "../components/ClaimForm/ClaimForm.style";

import { FIELD_TYPE } from "./FormFields";
import OutlinedDatePicker from "../components/form_components/OutlinedDatePicker";
import OutlinedTextarea from "../components/form_components/OutlinedTextarea";

export const formAttributes = (props, name, helperText) => ({
    id: name,
    onChange: props.handleChange,
    onBlur: props.handleBlur,
    value: props.values?.[name],
    error: (
        props.errors?.[name] &&
        (props.touched?.[name] || props.submitCount > 0)
    ),
    helperText:
        (props.touched?.[name] || props.submitCount > 0) && props.errors?.[name]
            ? props.errors?.[name]
            : helperText || "",
})

export const getDynamicElements = (
    field,
    formik,
) => {
    let element;

    switch (field.fieldType) {
        case FIELD_TYPE.SINGLE_LINE_TEXT: {
            element = (
                <OutlinedTextInput
                    label={field.label}
                    hideLabel={field.hideLabel}
                    formik={formik}
                    name={field.name}
                    placeholder={field.placeholder}
                    type={field.type}
                    required={field.required}
                />
            )
            break
        }

        case FIELD_TYPE.PHONE_GROUP: {
            const fields = []

            field.fields.forEach(fieldData => {
                fields.push(
                    getDynamicElements(fieldData, formik)
                )
            })

            element = (
                <PhoneGroup>
                    {fields}
                </PhoneGroup>
            )
            break
        }

        case FIELD_TYPE.DROPDOWN_SELECT:
            element = (
                <OutlinedSelect
                    label={field.label}
                    formik={formik}
                    name={field.name}
                    placeholder={field.placeholder}
                    options={field.options}
                    required={field.required}
                />
            )
            break

        case FIELD_TYPE.RADIO_SELECT:
            element = (
                <OutlinedRadioButton
                    label={field.label}
                    formik={formik}
                    name={field.name}
                    placeholder={field.placeholder}
                    options={field.options}
                    required={field.required}
                />
            )
            break
        case FIELD_TYPE.DATE_PICKER:
            element = (
                <OutlinedDatePicker
                    label={field.label}
                    formik={formik}
                    name={field.name}
                    placeholder={field.placeholder}
                    required={field.required}
                    disableFuture={field.disableFuture}
                />
            )
            break

        case FIELD_TYPE.TEXTAREA:
            element = (
                <OutlinedTextarea
                    label={field.label}
                    formik={formik}
                    name={field.name}
                    placeholder={field.placeholder}
                    required={field.required}
                />
            )
            break

        default:
            break
    }
    return element
}

const setFieldType = (field, fieldType, schema, initialValues, rowsToEdit) => {
    const setValueInSchema = () => {
        if (field.name) {
            initialValues[field.name] = rowsToEdit[field.name] || ""
            schema[field.name] = fieldType
        }
    }

    if ([
        "policyHolderFirstName",
        "policyHolderLastName",
        "policyNumber",
        "patientFirstName",
        "patientLastName",
    ].includes(field.name)) {

        fieldType =
            Yup
                .string()
            .trim()
                .matches(/^[a-zA-Z0-9 _-]*$/, {
                    message: "Only alphanumeric, underscore(_), and hyphen(-) are allowed.",
                })

        setValueInSchema()
    }
    else if ([
        "policyHolderEmail",
        "patientEmail",
    ].includes(field.name)) {

        fieldType =
            Yup
                .string()
                .trim()
                //eslint-disable-next-line
            .matches(/^([a-zA-Z0-9_\-\.\+]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/, {
                message: "Enter valid email address.",
            })

        setValueInSchema()
    }
    else if ([
        "policyHolderPhoneNumber",
        "patientPhoneNumber",
    ].includes(field.name)) {

        fieldType = Yup
            .string()
            .trim()
            .min(10, 'Please enter 10 digit valid number')
            .max(10, 'Please enter 10 digit valid number')

        setValueInSchema()
    }
    else if (field.fieldType === FIELD_TYPE.PHONE_GROUP) {
        field.fields.forEach(fieldData => {
            setFieldType(fieldData, fieldType, schema, initialValues, rowsToEdit)
        })
    }

    if (field.required) {
        fieldType = fieldType.required(
            `${(field.label || field.name)} is required.`
        )
        setValueInSchema()
    }
}

export const GetFormikObject = (fields, rowsToEdit = {}) => {
    const initialValues = {}
    const schema = {}

    fields.forEach((field) => {
        let fieldType = Yup.mixed()
        setFieldType(field, fieldType, schema, initialValues, rowsToEdit)
    })

    const formikObj = {
        "initialValues": initialValues,
        "validationSchema": Yup.object().shape(schema),
        "enableReinitialize": true,
        "validateOnMount": true,
    }
    return formikObj
}
