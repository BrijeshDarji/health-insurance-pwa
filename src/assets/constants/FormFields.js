/**
 *  @description This file contains all form fields.
 */

import {
    FIELD_TYPE,
    GENDER_LIST,
    PHONE_CODE_LIST,
    RELATIONSHIP_LIST,
} from "./Constant"

export const POLICY_HOLDER_DETAIL_FIELDS = [
    {
        label: "First Name",
        name: "policyHolderFirstName",
        placeholder: "Enter first name",
        type: "text",
        fieldType: FIELD_TYPE.SINGLE_LINE_TEXT,
        required: true,
    },
    {
        label: "Last Name",
        name: "policyHolderLastName",
        placeholder: "Enter last name",
        type: "text",
        fieldType: FIELD_TYPE.SINGLE_LINE_TEXT,
        required: true,
    },
    {
        label: "Policy Number",
        name: "policyNumber",
        placeholder: "Enter policy number",
        type: "text",
        fieldType: FIELD_TYPE.SINGLE_LINE_TEXT,
        required: true,
    },
    {
        label: "Email Address",
        name: "policyHolderEmail",
        placeholder: "Enter email address",
        type: "text",
        fieldType: FIELD_TYPE.SINGLE_LINE_TEXT,
        required: true,
    },
    {
        fieldType: FIELD_TYPE.PHONE_GROUP,
        fields: [
            {
                label: "Phone Number",
                name: "policyHolderPhoneCode",
                fieldType: FIELD_TYPE.DROPDOWN_SELECT,
                required: true,
                options: PHONE_CODE_LIST,
            },
            {
                label: "Phone Number",
                hideLabel: true,
                name: "policyHolderPhoneNumber",
                placeholder: "Enter phone number",
                type: "text",
                fieldType: FIELD_TYPE.SINGLE_LINE_TEXT,
                required: true,
            },
        ]
    },
]

export const PATIENT_DETAIL_FIELDS = [
    {
        label: "First Name",
        name: "patientFirstName",
        placeholder: "Enter first name",
        type: "text",
        fieldType: FIELD_TYPE.SINGLE_LINE_TEXT,
        required: true,
    },
    {
        label: "Last Name",
        name: "patientLastName",
        placeholder: "Enter last name",
        type: "text",
        fieldType: FIELD_TYPE.SINGLE_LINE_TEXT,
        required: true,
    },
    {
        label: "Gender",
        name: "gender",
        placeholder: "",
        type: "text",
        fieldType: FIELD_TYPE.RADIO_SELECT,
        required: true,
        options: GENDER_LIST,
    },
    {
        label: "Date of Birth",
        name: "dateOfBirth",
        placeholder: "Select Date of Birth",
        type: "text",
        fieldType: FIELD_TYPE.DATE_PICKER,
        required: true,
        disableFuture: true,
    },
    {
        label: "Email Address",
        name: "patientEmail",
        placeholder: "Enter email address",
        type: "text",
        fieldType: FIELD_TYPE.SINGLE_LINE_TEXT,
        required: true,
    },
    {
        fieldType: FIELD_TYPE.PHONE_GROUP,
        fields: [
            {
                label: "Phone Number",
                name: "patientPhoneCode",
                fieldType: FIELD_TYPE.DROPDOWN_SELECT,
                required: true,
                options: PHONE_CODE_LIST
            },
            {
                label: "Phone Number",
                hideLabel: true,
                name: "patientPhoneNumber",
                placeholder: "Enter phone number",
                type: "text",
                fieldType: FIELD_TYPE.SINGLE_LINE_TEXT,
                required: true,
            },
        ]
    },
    {
        label: "Relationship to Policy Holder",
        name: "relationshipToPolicyHolder",
        placeholder: "Select",
        type: "text",
        fieldType: FIELD_TYPE.DROPDOWN_SELECT,
        required: true,
        options: RELATIONSHIP_LIST,
    },
]

export const DESCRIPTION_OF_CLAIM_FIELDS = [
    {
        label: "Condition",
        name: "condition",
        placeholder: "Enter Condition",
        type: "text",
        fieldType: FIELD_TYPE.TEXTAREA,
        required: true,
    },
]

export const VISIT_DETAIL_FIELDS = [
    {
        label: "Date of visit",
        name: "dateOfVisit",
        placeholder: "Select Date of Visit",
        type: "text",
        fieldType: FIELD_TYPE.DATE_PICKER,
        required: true,
        disableFuture: true,
    },
    {
        label: "Location",
        name: "location",
        placeholder: "Enter Location",
        type: "text",
        fieldType: FIELD_TYPE.SINGLE_LINE_TEXT,
        required: true,
    },
]
