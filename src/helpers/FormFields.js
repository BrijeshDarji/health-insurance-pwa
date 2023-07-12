export const FIELD_TYPE = {
    SINGLE_LINE_TEXT: "SINGLE_LINE_TEXT",
    PHONE_GROUP: "PHONE_GROUP",
    PHONE_NUMBER: "PHONE_NUMBER",
    SINGLE_CHECKBOX: "SINGLE_CHECKBOX",
    DROPDOWN_SELECT: "DROPDOWN_SELECT",
    RADIO_SELECT: "RADIO_SELECT",
    DATE_PICKER: "DATE_PICKER",
    TEXTAREA: "TEXTAREA"
}

const PHONE_CODE_LIST = [
    { label: "+91", value: "+91" },
    { label: "+1", value: "+1" },
    { label: "+27", value: "+27" },
    { label: "+34", value: "+34" },
    { label: "+44", value: "+44" },
    { label: "+55", value: "+55" },
    { label: "+62", value: "+62" },
    { label: "+66", value: "+66" },
    { label: "+852", value: "+852" },
    { label: "+971", value: "+971" },
]

const GENDER_LIST = [
    { label: "Male", value: "MALE" },
    { label: "Female", value: "FEMALE" },
]

const RELATIONSHIP_LIST = [
    { label: "My Self", value: "MY_SELF" },
    { label: "Parent", value: "PARENT" },
    { label: "Sibling", value: "SIBLING" },
    { label: "Spouse", value: "SPOUSE" },
]

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
                options: PHONE_CODE_LIST
            },
            {
                label: "Phone Number",
                hideLabel: true,
                name: "policyHolderPhoneNumber",
                placeholder: "Enter phone number",
                type: "number",
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
                type: "number",
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
        options: RELATIONSHIP_LIST
    },
]

export const DISCRIPTION_OF_CLAIM_DETAIL_FIELDS = [
    {
        label: "Condition",
        name: "condition",
        placeholder: "Enter Condition",
        type: "text",
        fieldType: FIELD_TYPE.TEXTAREA,
        required: true,
    },
]

export const VISIT_INFORMATION_DETAIL_FIELDS = [
    {
        label: "Date of visit",
        name: "dateOfVisit",
        placeholder: "Select Date of Visit",
        type: "text",
        fieldType: FIELD_TYPE.DATE_PICKER,
        required: true,
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

export const DOCUMENT_TYPES = [
    { id: "CLAIM_DOCUMENTS", label: "Claim Documents", },
    { id: "RECEIPTS", label: "Receipts", },
    { id: "PROOF_PAYMENT", label: "Proof of Payment", },
    { id: "MEDICAL_REPORTS", label: "Medical Reports", },
]
