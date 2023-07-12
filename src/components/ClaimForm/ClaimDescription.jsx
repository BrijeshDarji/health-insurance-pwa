import React, { memo } from "react";
import { DESCRIPTION_OF_CLAIM_FIELDS } from "../../helpers/FormFields";
import { getDynamicElements } from "../../helpers/Utils";

function ClaimDescription({ formik = {} }) {
    return (
        <>
            {DESCRIPTION_OF_CLAIM_FIELDS.map((field, index) => (
                <div key={index}>{getDynamicElements(field, formik)}</div>
            ))}
        </>
    );
}

export default memo(ClaimDescription);
