import React from "react";

import { GlobalInputLabel, GlobalRadioGroup } from "./FormComponents.style.js";

import { formAttributes } from "../../helpers/Utils.js";
import { FormControlLabel, Radio } from "@mui/material";

function OutlinedRadioButton({
    label,
    name,
    disabled,
    formik,
    required = false,
    options = [],
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

            <GlobalRadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                required={required}
                disabled={disabled}
                onChange={handleChange}
                {...formAttr}
            >
                {
                    options?.length && (
                        options.map(data => (
                            <FormControlLabel
                                key={data.value}
                                label={data.label}
                                value={data.value}
                                control={<Radio />}
                            />
                        ))
                    )
                }
            </GlobalRadioGroup>
        </div>
    );
}

export default OutlinedRadioButton;
