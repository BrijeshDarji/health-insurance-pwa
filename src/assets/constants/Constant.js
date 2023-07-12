/**
 *  @description This file contains all system constants.
 */

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

export const PHONE_CODE_LIST = [
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

export const GENDER_LIST = [
    { label: "Male", value: "MALE" },
    { label: "Female", value: "FEMALE" },
]

export const RELATIONSHIP_LIST = [
    { label: "My Self", value: "MY_SELF" },
    { label: "Parent", value: "PARENT" },
    { label: "Sibling", value: "SIBLING" },
    { label: "Spouse", value: "SPOUSE" },
]

export const DOCUMENT_TYPES = [
    { id: "CLAIM_DOCUMENTS", label: "Claim Documents" },
    { id: "RECEIPTS", label: "Receipts" },
    { id: "PROOF_PAYMENT", label: "Proof of Payment" },
    { id: "MEDICAL_REPORTS", label: "Medical Reports" },
]

export const STEPPER_LABELS = [
    { id: 1, label: "Policy Holder Details" },
    { id: 2, label: "Patient Details" },
    { id: 3, label: "Description of Claim" },
    { id: 4, label: "Visit Information" },
    { id: 5, label: "Documents" },
];
