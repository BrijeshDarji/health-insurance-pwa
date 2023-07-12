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
                <FormControlLabel
                    value="female"
                    control={
                        <Radio
                            sx={{
                                "&.Mui-checked": {
                                    color: "#FC6F22",
                                },
                            }}
                        />
                    }
                    label="Female"
                />
                <FormControlLabel
                    value="male"
                    control={
                        <Radio
                            sx={{
                                "&.Mui-checked": {
                                    color: "#FC6F22",
                                },
                            }}
                        />
                    }
                    label="Male"
                />
            </GlobalRadioGroup>
        </div>
    );
}

export default OutlinedRadioButton;
