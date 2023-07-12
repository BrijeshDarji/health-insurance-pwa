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
        "Documents": {
            "selecetedFiles": selectedDocs,
            "setSelectedFiles": setSelectedDocs,
        },
        "Receipts": {
            "selecetedFiles": selectedReceipts,
            "setSelectedFiles": setSelectedReceipts,
        },
        "Proof of Payment": {
            "selecetedFiles": selectedPaymentDocs,
            "setSelectedFiles": setSelectedPaymentDocs,
        },
        "Medical Reports": {
            "selecetedFiles": selectedMedDocs,
            "setSelectedFiles": setSelectedMedDocs,
        },
    }

    return (
        <>
            <DocumentContainer>
                {DOCUMENT_TYPES.map(type => (
                    <FileDrop
                        selectedFiles={FIELDS_STATES[type]["selecetedFiles"]}
                        setSelectedFiles={FIELDS_STATES[type]["setSelectedFiles"]}
                        type={type}
                    />
                ))}
            </DocumentContainer>
        </>
    );
}

export default memo(ClaimDocuments);
