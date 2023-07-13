import React from "react";
import { FormControlLabel, Radio } from "@mui/material";

import { formAttributes } from "../../helpers/Utils.js";

import { GlobalInputLabel, GlobalRadioGroup } from "./FormComponents.style.js";

function RadioButton({
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
                {label} {required ? " *" : ""}
            </GlobalInputLabel>

            <GlobalRadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                disabled={disabled}
                {...formAttr}
                onChange={handleChange}
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

export default RadioButton;
