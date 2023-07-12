import React from "react";
import MenuItem from "@mui/material/MenuItem";

import {
    GlobalInput,
    GlobalInputLabel,
    classes,
} from "./FormComponents.style.js";

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

            <GlobalInput
                color="primary"
                fullWidth
                select
                disabled={disabled}
                placeholder={placeholder}
                {...formAttr}
                required={required}
                value={options?.length ? formik?.values?.[name] || "" : ""}
                onChange={handleChange}
                className={classes.textField}
                InputProps={{
                    className: classes.input,
                }}
            >
                {options?.length ? (
                    options.map((data) => (
                        <MenuItem
                            value={data.value || data.label}
                            key={data.label}
                        >
                            {data.label}
                        </MenuItem>
                    ))
                ) : (
                    <MenuItem disabled={true}>No Items</MenuItem>
                )}
            </GlobalInput>
        </div>
    );
}

export default OutlinedSelect;
