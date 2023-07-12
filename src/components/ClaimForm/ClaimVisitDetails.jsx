import React, { memo } from "react";

import { VISIT_DETAIL_FIELDS } from "../../helpers/FormFields";
import { getDynamicElements } from "../../helpers/Utils";

function ClaimVisitDetails({ formik = {} }) {
    return (
        <>
            {VISIT_DETAIL_FIELDS.map((field, index) => (
                <div key={index}>{getDynamicElements(field, formik)}</div>
            ))}
        </>
    );
}

export default memo(ClaimVisitDetails);
