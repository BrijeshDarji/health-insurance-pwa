/**
 *  @description This file contains helper methods. 
 */

import * as Yup from "yup"

import DropDown from "../components/form_components/DropDown";
import TextInput from "../components/form_components/TextInput";
import RadioButton from "../components/form_components/RadioButton";
import DatePicker from "../components/form_components/DatePicker";
import Textarea from "../components/form_components/Textarea";

import {
    CLAIM_DOCUMENTS,
    FIELD_TYPE,
    MEDICAL_REPORTS,
    PROOF_PAYMENT,
    RECEIPTS
} from "../assets/constants/Constant";

import { PhoneGroup } from "../components/ClaimForm/ClaimForm.style";

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
                <TextInput
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
                <DropDown
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
                <RadioButton
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
                <DatePicker
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
                <Textarea
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
            .matches(/^\d{10}$/, {
                message: "Please enter 10 digit valid number.",
            })

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

export const converToBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader()
        fileReader.readAsDataURL(file)

        fileReader.onload = () => {
            resolve(fileReader.result)
        }

        fileReader.onerror = (error) => {
            reject(error)
        }
    })
}

const getBase64 = async (file) => {
    const dataUrl = await converToBase64(file)
    return dataUrl
}

export const getJsonForPabbly = async ({ policyHolderDetails,
    patientDetails,
    claimDescription,
    claimVisitDetails,
    selectedDocs,
    selectedReceipts,
    selectedPaymentDocs,
    selectedMedDocs, }
) => {
    const policyHolderData = {
        firstName: policyHolderDetails.policyHolderFirstName || "",
        lastName: policyHolderDetails.policyHolderLastName || "",
        policyNumber: policyHolderDetails.policyNumber || "",
        email: policyHolderDetails.policyHolderEmail || "",
        phoneCode: policyHolderDetails.policyHolderPhoneCode || "",
        phoneNumber: policyHolderDetails.policyHolderPhoneNumber || "",
    }

    const patientData = {
        firstName: patientDetails.patientFirstName || "",
        lastName: patientDetails.patientLastName || "",
        gender: patientDetails.gender || "",
        dateOfBirth: patientDetails.dateOfBirth || "",
        email: patientDetails.patientEmail || "",
        phoneCode: patientDetails.patientPhoneCode || "",
        phoneNumber: patientDetails.patientPhoneNumber || "",
        relationshipToPolicyHolder: patientDetails.relationshipToPolicyHolder || "",
    }

    const claimConditionData = {
        condition: claimDescription.condition || "",
    }

    const visitData = {
        dateOfVisit: claimVisitDetails.dateOfVisit || "",
        location: claimVisitDetails.location || "",
    }

    const params = {
        "policyHolderDetails": policyHolderData,
        "patientDetails": patientData,
        "claimDetails": claimConditionData,
        "visitDetails": visitData,
    }

    const documentsArr = [
        { type: CLAIM_DOCUMENTS, docArr: selectedDocs, },
        { type: RECEIPTS, docArr: selectedReceipts, },
        { type: PROOF_PAYMENT, docArr: selectedPaymentDocs, },
        { type: MEDICAL_REPORTS, docArr: selectedMedDocs, },
    ]

    const claimDocs = []
    const receiptsDocs = []
    const payentDocs = []
    const medicalReportDocs = []

    for (let docInstanceIndex = 0; docInstanceIndex < documentsArr.length; docInstanceIndex++) {
        const docInstance = documentsArr[docInstanceIndex];

        for (let docIndex = 0; docIndex < docInstance.docArr.length; docIndex++) {
            const doc = docInstance.docArr[docIndex];

            const dataUrl = await getBase64(doc);

            const docObj = {
                name: doc.name,
                mimeType: doc.type,
                dataUrl: dataUrl
            }

            if (docInstance.type === CLAIM_DOCUMENTS) {
                claimDocs.push(docObj)
            }
            else if (docInstance.type === RECEIPTS) {
                receiptsDocs.push(docObj)
            }
            else if (docInstance.type === PROOF_PAYMENT) {
                payentDocs.push(docObj)
            }
            else if (docInstance.type === MEDICAL_REPORTS) {
                medicalReportDocs.push(docObj)
            }
        }
    }

    const documents = {
        "claimDocuments": claimDocs,
        "receipts": receiptsDocs,
        "proofPaymentDocument": payentDocs,
        "medicalReports": medicalReportDocs
    }

    params.documents = documents

    return params
}
