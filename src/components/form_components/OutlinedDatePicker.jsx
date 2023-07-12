import React from "react";

import { GlobalDatePicker, GlobalInputLabel } from "./FormComponents.style.js";

import { formAttributes } from "../../helpers/Utils.js";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import dayjs from "dayjs";

function OutlinedDatePicker({
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

            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <GlobalDatePicker
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    required={required}
                    disabled={disabled}
                    defaultValue={dayjs("2022-04-17")}
                    onChange={handleChange}
                    {...formAttr}
                    slotProps={{ textField: { fullWidth: true } }}
                    slots={{
                        openPickerIcon: CalendarTodayIcon,
                    }}
                ></GlobalDatePicker>
            </LocalizationProvider>
        </div>
    );
}

export default OutlinedDatePicker;
