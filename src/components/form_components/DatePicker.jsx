import React from "react";
import dayjs from 'dayjs';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { formAttributes } from "../../helpers/Utils.js";

import { GlobalDatePicker, GlobalInputLabel } from "./FormComponents.style.js";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

function DatePicker({
    label,
    name,
    disabled,
    formik,
    required = false,
    disableFuture = false,
}) {
    const formAttr = formAttributes(formik, name);

    const handleChange = (date) => {
        formik.setFieldValue &&
            formik.setFieldValue(name, dayjs(date).format("MM/DD/YYYY"))
    };

    return (
        <div>
            <GlobalInputLabel htmlFor={`outlined-input-for-${name}`}>
                {label} {required ? " *" : ""}
            </GlobalInputLabel>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <GlobalDatePicker
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    disabled={disabled}
                    value={dayjs(formik?.values?.[name])}
                    onChange={handleChange}
                    format="MM/DD/YYYY"
                    placeHolder="MM/DD/YYYY"
                    selectedSections="day"
                    slotProps={{
                        textField: {
                            fullWidth: true,
                            helperText: formAttr.helperText
                        }
                    }}
                    slots={{
                        openPickerIcon: CalendarTodayIcon,
                    }}
                    disableFuture={disableFuture}
                ></GlobalDatePicker>
            </LocalizationProvider>
        </div>
    );
}

export default DatePicker;
