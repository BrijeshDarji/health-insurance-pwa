import React from "react";

import { GlobalInputLabel, GlobalTextarea } from "./FormComponents.style.js";

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

    const handleChange = (e) => {
        formik.setFieldValue &&
            formik.setFieldValue(name, e.target?.value || "");
    };

    return (
        <div>
            <GlobalInputLabel htmlFor={`outlined-input-for-${name}`}>
                {label}
            </GlobalInputLabel>

            <GlobalTextarea
                required={required}
                disabled={disabled}
                defaultValue=""
                fullwidth
                onChange={handleChange}
                placeholder={placeholder}
                {...formAttr}
                minRows={20}
            ></GlobalTextarea>
        </div>
    );
}

export default OutlinedTextarea;
