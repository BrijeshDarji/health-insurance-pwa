import React, { memo } from "react";
import { DISCRIPTION_OF_CLAIM_DETAIL_FIELDS } from "../../helpers/FormFields";
import { getDynamicElements } from "../../helpers/Utils";

function ClaimDescription(formik = {}) {
    return (
        <>
            {DISCRIPTION_OF_CLAIM_DETAIL_FIELDS.map((field, index) => (
                <div key={index}>{getDynamicElements(field, formik)}</div>
            ))}
        </>
    );
}

export default memo(ClaimDescription);
