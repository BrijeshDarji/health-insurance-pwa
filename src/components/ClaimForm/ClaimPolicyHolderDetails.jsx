import React, { memo } from "react";

import { POLICY_HOLDER_DETAIL_FIELDS } from "../../helpers/FormFields.js";
import { getDynamicElements } from "../../helpers/Utils.js";

function ClaimPolicyHolderDetails() {
    return (
        <>
            {
                POLICY_HOLDER_DETAIL_FIELDS.map((field, index) => (
                    getDynamicElements(field, {})
                ))
            }
        </>
    );
}

export default memo(ClaimPolicyHolderDetails);
