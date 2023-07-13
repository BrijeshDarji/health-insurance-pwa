/**
 *  @description This file is a ClaimFormPreview step of the main ClaimForm.
 */

import React, { memo } from "react";
import { Grid } from "@mui/material";

import {
    CLAIM_DOCUMENTS,
    MEDICAL_REPORTS,
    PROOF_PAYMENT,
    RECEIPTS,
    GENDER_LIST,
    RELATIONSHIP_LIST
} from "../../assets/constants/Constant";

import {
    CardsWrapper,
    ClaimPreview,
    LabelClaim,
    ValueClaim,
    Wrapper,
} from "./ClaimFormPreview.style";

function ClaimFormPreview(props) {
    const {
        selectedDocs = [],
        selectedReceipts = [],
        selectedPaymentDocs = [],
        selectedMedDocs = [],
        policyHolderDetails,
        patientDetails,
        claimDescription,
        claimVisitDetails,
    } = props

    const DOCUMENTS_DETAILS = {
        [CLAIM_DOCUMENTS]: selectedDocs,
        [RECEIPTS]: selectedReceipts,
        [PROOF_PAYMENT]: selectedPaymentDocs,
        [MEDICAL_REPORTS]: selectedMedDocs,
    }

    const claimPreviewObj = [
        {
            id: 1,
            formDetails: policyHolderDetails,
            formName: "Policy Details",
            meta: [
                {
                    group: [
                        {
                            label: "First Name",
                            key: "policyHolderFirstName",
                        },
                        {
                            label: "Last Name",
                            key: "policyHolderLastName",
                        },
                    ],
                },
                {
                    label: "Policy Number",
                    key: "policyNumber",
                },
                {
                    label: "Email Address",
                    key: "policyHolderEmail",
                },
                {
                    label: "Phone Number",
                    key: "policyHolderPhoneNumber",
                    preFix: "policyHolderPhoneCode",
                    type: "phoneNumber",
                },
            ],
        },
        {
            id: 2,
            formDetails: patientDetails,
            formName: "Patient Details",
            meta: [
                {
                    group: [
                        {
                            label: "First Name",
                            key: "patientFirstName",
                        },
                        {
                            label: "Last Name",
                            key: "patientLastName",
                        },
                        {
                            label: "Gender",
                            key: "gender",
                            isKeyBased: true,
                        },
                        {
                            label: "Date of Birth",
                            key: "dateOfBirth",
                        },
                    ],
                },
                {
                    label: "Email Address",
                    key: "patientEmail",
                },
                {
                    label: "Phone Number",
                    key: "patientPhoneNumber",
                    preFix: "patientPhoneCode",
                    type: "phoneNumber",
                },
                {
                    label: "Relationship to Policy Holder",
                    key: "relationshipToPolicyHolder",
                    isKeyBased: true,
                },
            ],
        },
        {
            id: 3,
            formName: "Description of Claim",
            formDetails: claimDescription,
            meta: [
                {
                    label: "Claim Condition",
                    key: "condition",
                },
            ],
        },
        {
            id: 4,
            formName: "Visit Information",
            formDetails: claimVisitDetails,
            meta: [
                {
                    label: "Date of Visit",
                    key: "dateOfVisit",
                },
                {
                    label: "Location",
                    key: "location",
                },
            ],
        },
        {
            id: 5,
            formName: "Documents",
            meta: [
                {
                    key: CLAIM_DOCUMENTS,
                    label: "Claim Documents"
                },
                {
                    key: RECEIPTS,
                    label: "Receipts"
                },
                {
                    key: PROOF_PAYMENT,
                    label: "Proof of Payment"
                },
                {
                    key: MEDICAL_REPORTS,
                    label: "Medical Reports"
                },
            ]
        },
    ];

    const getLabelFromKey = (field, formDetails) => {
        const id = formDetails?.[field.key] || ""
        let label = "-"

        if (field.key === "gender") {
            label = GENDER_LIST.find(gender => gender.value === id).label || ""
        }
        else if (field.key === "relationshipToPolicyHolder") {
            label = RELATIONSHIP_LIST.find(relation => relation.value === id).label || ""
        }

        return label
    }

    const ShowFieldValue = ({ field, formDetails }) => {
        let label = formDetails?.[field.key] || ""

        if (field.isKeyBased) {
            label = getLabelFromKey(field, formDetails) || ""
        }

        if (field.type === "phoneNumber") {
            label = formDetails?.[field.preFix] + " " + formDetails?.[field.key] || ""
        }

        return (
            <>
                <LabelClaim>{field.label}</LabelClaim>

                <ValueClaim>
                    {label}
                </ValueClaim>
            </>
        )
    }

    return (
        <>
            {claimPreviewObj.map((formGroup) => (
                <ClaimPreview key={formGroup.id}>
                    <p className="heading">
                        {formGroup.formName}
                    </p>

                    <CardsWrapper>
                        {formGroup.meta.map((fields, index) =>
                            fields.group
                                ? (
                                    <Grid container spacing={0} key={index}>
                                        {fields.group.map((field, index) => (
                                            <Grid item xs={6} md={6} key={index}>
                                                <Wrapper>
                                                    <ShowFieldValue
                                                        field={field}
                                                        formDetails={formGroup.formDetails}
                                                    />
                                                </Wrapper>
                                            </Grid>
                                        ))}
                                    </Grid>
                                )
                                : (
                                    <>
                                        {formGroup.formName === "Documents"
                                            ? (
                                                <Wrapper key={index}>
                                                    <LabelClaim>{fields.label}</LabelClaim>
                                                    {
                                                        DOCUMENTS_DETAILS[fields.key]?.length > 0 ?
                                                            DOCUMENTS_DETAILS[fields.key].map(document => (
                                                                <ValueClaim>{document.name}</ValueClaim>
                                                            ))
                                                            : (
                                                                <ValueClaim>-</ValueClaim>
                                                            )
                                                    }
                                                </Wrapper>
                                            )
                                            : (
                                                <Wrapper key={index}>
                                                    <ShowFieldValue
                                                        field={fields}
                                                        formDetails={formGroup.formDetails}
                                                    />
                                                </Wrapper>
                                            )
                                        }
                                    </>
                                )
                        )}
                    </CardsWrapper>
                </ClaimPreview>
            ))}
        </>
    );
}

export default memo(ClaimFormPreview);
