/**
 *  @description This file is a ClaimVisitDetails step of the main ClaimForm.
 */

import React, { memo } from "react";

import { VISIT_DETAIL_FIELDS } from "../../assets/constants/FormFields";
import { getDynamicElements } from "../../helpers/Utils";

function ClaimVisitDetails({ formik = {} }) {
    return (
        <>
            {
                VISIT_DETAIL_FIELDS.map((field, index) => (
                    <div key={index}>{getDynamicElements(field, formik)}</div>
                ))
            }
        </>
    );
}

export default memo(ClaimVisitDetails);
