import React from "react";

import { formAttributes } from "../../helpers/Utils.js";

import { GlobalInput, GlobalInputLabel } from "./FormComponents.style.js";

function Textarea({
    label,
    name,
    disabled,
    placeholder,
    formik,
    required = false,
}) {
    const formAttr = formAttributes(formik, name);

    return (
        <div>
            <GlobalInputLabel htmlFor={`outlined-input-for-${name}`}>
                {label}
            </GlobalInputLabel>

            <GlobalInput
                color="primary"
                fullWidth
                multiline
                minRows={20}
                disabled={disabled}
                placeholder={placeholder}
                required={required}
                {...formAttr}
            />
        </div>
    );
}

export default Textarea;
