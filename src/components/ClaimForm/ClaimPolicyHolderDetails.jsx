/**
 *  @description This file is a ClaimPolicyHolderDetails step of the main ClaimForm.
 */

import React, { memo } from "react";

import { getDynamicElements } from "../../helpers/Utils.js";
import { POLICY_HOLDER_DETAIL_FIELDS } from "../../assets/constants/FormFields.js";

function ClaimPolicyHolderDetails({ formik = {} }) {
    return (
        <>
            {
                POLICY_HOLDER_DETAIL_FIELDS.map((field, index) => (
                    <div key={index}>
                        {getDynamicElements(field, formik)}
                    </div>
                ))
            }
        </>
    );
}

export default memo(ClaimPolicyHolderDetails);
