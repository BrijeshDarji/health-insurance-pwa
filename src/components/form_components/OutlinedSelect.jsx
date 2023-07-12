import React from "react";
import MenuItem from "@mui/material/MenuItem";

import { GlobalInput, GlobalInputLabel, } from "./FormComponents.style.js";

import { formAttributes } from "../../helpers/Utils.js";

function OutlinedSelect({
    label,
    name,
    placeholder,
    disabled,
    formik,
    options,
    required = false,
}) {
    const formAttr = formAttributes(formik, name)

    const handleChange = (e) => {
        formik.setFieldValue && formik.setFieldValue(name, e.target?.value || "")
    }

    return (
        <div>
            <GlobalInputLabel htmlFor={`outlined-input-for-${name}`}>
                {label}
            </GlobalInputLabel>

            <GlobalInput
                color="primary"
                fullWidth
                select
                disabled={disabled}
                placeholder={placeholder}
                {...formAttr}
                defaultValue=""
                required={required}
                value={
                    options?.length
                        ? formik?.values?.[name] || ""
                        : ""
                }
                onChange={handleChange}
            >
                {
                    options?.length
                        ? options.map((data) => (
                            <MenuItem
                                value={data.value || data.label}
                                key={data.label}
                            >
                                {data.label}
                            </MenuItem>
                        ))
                        : (
                            <MenuItem disabled={true}>
                                No Items
                            </MenuItem>
                        )
                }
            </GlobalInput>
        </div>
    );
}

export default OutlinedSelect;
