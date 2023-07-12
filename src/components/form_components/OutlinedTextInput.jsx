import React from "react";
import { GlobalInputLabel, GlobalInput } from "./FormComponents.style.js";
// import { formAttributes } from "../../helpers/Utils"

function OutlinedTextInput({
    label,
    name,
    placeholder,
    disabled,
    type,
    formik,
}) {
    // const formAttr = formAttributes(formik, name)

    return (
        <div>
            <GlobalInputLabel htmlFor={`outlined-input-for-${name}`}>
                {label}
            </GlobalInputLabel>

            <GlobalInput
                color="primary"
                fullWidth
                disabled={disabled}
                placeholder={placeholder}
                type={type}
                // {...formAttr}
            />
        </div>
    );
}

export default OutlinedTextInput;
