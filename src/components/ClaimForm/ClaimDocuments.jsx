import React, { memo, } from "react";

import { DocumentContainer, } from "./ClaimDocument.style";
import { DOCUMENT_TYPES } from "../../helpers/FormFields";
import FileDrop from "./FileDrop";

function ClaimDocuments(props) {
    const {
        selectedDocs,
        setSelectedDocs,
        selectedReceipts,
        setSelectedReceipts,
        selectedPaymentDocs,
        setSelectedPaymentDocs,
        selectedMedDocs,
        setSelectedMedDocs } = props

    const FIELDS_STATES = {
        "CLAIM_DOCUMENTS": {
            "selecetedFiles": selectedDocs,
            "setSelectedFiles": setSelectedDocs,
        },
        "RECEIPTS": {
            "selecetedFiles": selectedReceipts,
            "setSelectedFiles": setSelectedReceipts,
        },
        "PROOF_PAYMENT": {
            "selecetedFiles": selectedPaymentDocs,
            "setSelectedFiles": setSelectedPaymentDocs,
        },
        "MEDICAL_REPORTS": {
            "selecetedFiles": selectedMedDocs,
            "setSelectedFiles": setSelectedMedDocs,
        },
    }

    return (
        <>
            <DocumentContainer>
                {DOCUMENT_TYPES.map(type => (
                    <FileDrop
                        selectedFiles={FIELDS_STATES[type.id]["selecetedFiles"]}
                        setSelectedFiles={FIELDS_STATES[type.id]["setSelectedFiles"]}
                        type={type}
                    />
                ))}
            </DocumentContainer>
        </>
    );
}

export default memo(ClaimDocuments);
