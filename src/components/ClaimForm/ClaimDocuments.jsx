import React, { memo, } from "react";

import FileDropzone from "../form_components/FileDropZone";

import { CLAIM_DOCUMENTS, DOCUMENT_TYPES, MEDICAL_REPORTS, PROOF_PAYMENT, RECEIPTS, } from "../../assets/constants/Constant";
import { DocumentContainer } from "./ClaimDocument.style";

function ClaimDocuments(props) {
    const {
        selectedDocs,
        setSelectedDocs,
        selectedReceipts,
        setSelectedReceipts,
        selectedPaymentDocs,
        setSelectedPaymentDocs,
        selectedMedDocs,
        setSelectedMedDocs,
    } = props

    const FIELDS_STATES = {
        [CLAIM_DOCUMENTS]: {
            "selectedFiles": selectedDocs,
            "setSelectedFiles": setSelectedDocs,
        },
        [RECEIPTS]: {
            "selectedFiles": selectedReceipts,
            "setSelectedFiles": setSelectedReceipts,
        },
        [PROOF_PAYMENT]: {
            "selectedFiles": selectedPaymentDocs,
            "setSelectedFiles": setSelectedPaymentDocs,
        },
        [MEDICAL_REPORTS]: {
            "selectedFiles": selectedMedDocs,
            "setSelectedFiles": setSelectedMedDocs,
        },
    }

    return (
        <>
            <DocumentContainer>
                {DOCUMENT_TYPES.map(type => (
                    <FileDropzone
                        selectedFiles={FIELDS_STATES[type.id]["selectedFiles"]}
                        setSelectedFiles={FIELDS_STATES[type.id]["setSelectedFiles"]}
                        type={type}
                    />
                ))}
            </DocumentContainer>
        </>
    );
}

export default memo(ClaimDocuments);
