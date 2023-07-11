import React, { memo } from "react";
import { PhoneGroup } from "./ClaimForm.style.js";

import OutlinedTextInput from "../form_components/OutlinedTextInput";
import OutlinedSelect from "../form_components/OutlinedSelect.jsx";

function ClaimPolicyHolderDetails() {
    return (
        <>
            {/* Stepper Forms */}

            <OutlinedTextInput
                label="First Name"
                name="policyHolderFirstName"
                placeholder="Enter first name"
            />
            <OutlinedTextInput
                label="Last Name"
                name="policyHolderLastName"
                placeholder="Enter last name"
            />
            <OutlinedTextInput
                label="Policy number"
                name="policyHolderFirstName"
                placeholder="Enter policy number"
            />
            <OutlinedTextInput
                label="Email Address"
                name="policyHolderEmail"
                placeholder="Enter email address"
            />
            <PhoneGroup>
                <OutlinedSelect
                    label="Phone Number"
                    name="policyHolderPhoneCode"
                    placeholder="Enter phone number"
                />
                <OutlinedTextInput
                    name="policyHolderPhoneNumber"
                    placeholder="Enter phone number"
                    type="number"
                />
            </PhoneGroup>
        </>
    );
}

export default memo(ClaimPolicyHolderDetails);
