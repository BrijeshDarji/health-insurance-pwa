import OutlinedSelect from "../components/form_components/OutlinedSelect";
import OutlinedTextInput from "../components/form_components/OutlinedTextInput";

import { PhoneGroup } from "../components/ClaimForm/ClaimForm.style";

import { FIELD_TYPE } from "./FormFields";

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
                    formik={formik}
                    name={field.name}
                    placeholder={field.placeholder}
                    type={field.type}
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
                />
            )
            break

        default:
            break
    }
    return element
}
