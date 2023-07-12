import React, { memo } from "react";

import docPreview from "../../assets/images/doc-preview.png";
import AddIcon from "@mui/icons-material/Add";
import {
    DocumentContainer,
    PreviewBox,
    UploadWrapper,
} from "./ClaimDocument.style";

function ClaimDocuments() {
    return (
        <DocumentContainer>
            <div className="head-content">Documents</div>
            <UploadWrapper>
                <PreviewBox>
                    <img src={docPreview} alt="doc-preview" />
                </PreviewBox>
                <PreviewBox>
                    <img src={docPreview} alt="doc-preview" />
                </PreviewBox>
                <PreviewBox className="upload">
                    <AddIcon />
                </PreviewBox>
            </UploadWrapper>
        </DocumentContainer>
    );
}

export default memo(ClaimDocuments);
