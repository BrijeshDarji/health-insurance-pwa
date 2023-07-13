import React from "react";
import MenuItem from "@mui/material/MenuItem";

import { formAttributes } from "../../helpers/Utils.js";

import {
    GlobalInput,
    GlobalInputLabel,
    classes,
} from "./FormComponents.style.js";

function DropDown({
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
                {label} {required ? " *" : ""}
            </GlobalInputLabel>

            <GlobalInput
                color="primary"
                fullWidth
                select
                disabled={disabled}
                placeholder={placeholder}
                {...formAttr}
                value={options?.length ? formik?.values?.[name] || "" : ""}
                onChange={handleChange}
                className={classes.textField}
                InputProps={{
                    className: classes.input,
                }}
            >
                {options?.length
                    ? (
                        options.map((data) => (
                            <MenuItem
                                value={data.value || data.label}
                                key={data.label}
                            >
                                {data.label}
                            </MenuItem>
                        ))
                    )
                    : (
                        <MenuItem disabled={true}>No Items</MenuItem>
                    )
                }
            </GlobalInput>
        </div>
    );
}

export default DropDown;
