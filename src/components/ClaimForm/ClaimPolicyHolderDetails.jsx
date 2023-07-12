import React, { Fragment, memo } from "react";

import { POLICY_HOLDER_DETAIL_FIELDS } from "../../helpers/FormFields.js";
import { getDynamicElements } from "../../helpers/Utils.js";

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
