/**
 *  @description This file is a ClaimPatientDetails step of the main ClaimForm.
 */

import React, { memo } from "react";

import { getDynamicElements } from "../../helpers/Utils";
import { PATIENT_DETAIL_FIELDS } from "../../assets/constants/FormFields";

function ClaimPatientDetails({ formik = {} }) {
    return (
        <>
            {
                PATIENT_DETAIL_FIELDS.map((field, index) => (
                    <div key={index}>{getDynamicElements(field, formik)}</div>
                ))
            }
        </>
    );
}

export default memo(ClaimPatientDetails);
