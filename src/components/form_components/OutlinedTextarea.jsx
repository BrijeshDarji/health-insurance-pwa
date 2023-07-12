import React from "react";

import { GlobalInput, GlobalInputLabel } from "./FormComponents.style.js";

import { formAttributes } from "../../helpers/Utils.js";

function OutlinedTextarea({
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

export default OutlinedTextarea;
