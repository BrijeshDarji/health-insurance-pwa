import React from "react";
import { GlobalInputLabel, GlobalInput } from "./FormComponents.style.js";
import { formAttributes } from "../../helpers/Utils"

function OutlinedTextInput({
    label,
    hideLabel = false,
    name,
    placeholder,
    disabled,
    type,
    formik,
    required = false,
}) {
    const formAttr = formAttributes(formik, name)

    return (
        <div>
            <GlobalInputLabel htmlFor={`outlined-input-for-${name}`}>
                {hideLabel ? "" : label}
            </GlobalInputLabel>

            <GlobalInput
                color="primary"
                fullWidth
                disabled={disabled}
                placeholder={placeholder}
                type={type}
                required={required}
                {...formAttr}
            />
        </div>
    );
}

export default OutlinedTextInput;
