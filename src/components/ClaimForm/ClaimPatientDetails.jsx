import React, { memo } from "react";
import { getDynamicElements } from "../../helpers/Utils";
import { PATIENT_DETAIL_FIELDS } from "../../helpers/FormFields";

function ClaimPatientDetails({ formik = {} }) {
    return (
        <>
            {PATIENT_DETAIL_FIELDS.map((field, index) => (
                <div key={index}>{getDynamicElements(field, formik)}</div>
            ))}
        </>
    );
}

export default memo(ClaimPatientDetails);
