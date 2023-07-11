import React from "react";
import { GlobalInputLabel, GlobalSelect } from "./FormComponents.style.js";
import { MenuItem } from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import { formAttributes } from "../../helpers/Utils"

function OutlinedSelect({ label, name, placeholder, disabled, formik }) {
    // const formAttr = formAttributes(formik, name)

    return (
        <div>
            <GlobalInputLabel htmlFor={`outlined-input-for-${name}`}>
                {label}
            </GlobalInputLabel>

            <GlobalSelect
                value="10"
                fullWidth
                disabled={disabled}
                placeholder={placeholder}
                color="primary"
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                IconComponent={ExpandMoreIcon}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={10}>+1</MenuItem>
                <MenuItem value={20}>+91</MenuItem>
                <MenuItem value={30}>+23</MenuItem>
            </GlobalSelect>
        </div>
    );
}

export default OutlinedSelect;
