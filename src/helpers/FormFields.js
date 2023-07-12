export const FIELD_TYPE = {
    SINGLE_LINE_TEXT: "SINGLE_LINE_TEXT",
    PHONE_GROUP: "PHONE_GROUP",
    PHONE_NUMBER: "PHONE_NUMBER",
    SINGLE_CHECKBOX: "SINGLE_CHECKBOX",
    DROPDOWN_SELECT: "DROPDOWN_SELECT",
    RADIO_SELECT: "RADIO_SELECT",
    DATE_PICKER: "DATE_PICKER",
}

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
                options: [
                    {
                        label: "+91",
                        value: "+91",
                    },
                    {
                        label: "+1",
                        value: "+1",
                    },
                ]
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
        label: "Gender",
        name: "gender",
        placeholder: "",
        type: "text",
        fieldType: FIELD_TYPE.RADIO_SELECT,
        required: true,
    },
    {
        label: "Date of Birth",
        name: "dateOfBirth",
        placeholder: "Select Date of Birth",
        type: "text",
        fieldType: FIELD_TYPE.DATE_PICKER,
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
                options: [
                    {
                        label: "+91",
                        value: "+91",
                    },
                    {
                        label: "+1",
                        value: "+1",
                    },
                ]
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
    {
        label: "Relationship to Policy Holder",
        name: "relationshipPolicyHolder",
        placeholder: "Select",
        type: "text",
        fieldType: FIELD_TYPE.DROPDOWN_SELECT,
        required: true,
    },
]
