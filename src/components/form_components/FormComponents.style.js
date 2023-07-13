import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import styled from "@emotion/styled";
import { RadioGroup, TextareaAutosize } from "@mui/material";
import { MobileDatePicker } from "@mui/x-date-pickers";

export const classes = theme => ({
    textField: {
        borderRadius: "8px",
        height: "50px",
        padding: "0 17px"
    },
    input: {
        borderRadius: "8px",
        height: "50px",
        padding: "0 17px"
    },
    radio: {
        '&$checked': {
            color: theme.palette.siteOrange.main
        }
    },
    checked: {}
})

export const GlobalInputLabel = styled(InputLabel)(({ theme }) => ({
    fontSize: 14,
    lineHeight: "17px",
    letterSpacing: 0,
    marginBottom: 8,
    color: theme.palette.primary.main,
    fontFamily: ["sf-pro-display-regular, system-ui, sans-serif"].join(","),
}));

export const GlobalInput = styled(TextField)(({ theme }) => ({
    fontSize: 14,
    lineHeight: "17px",
    letterSpacing: 0,
    marginBottom: 18,
    border: 0,
    color: theme.palette.primary.main,
    "& .Mui-focused": {
        outline: "none",
        border: 0,
    },
    "& .MuiInputBase-input": {
        outline: "none",
        fontFamily: ["sf-pro-display-regular, system-ui, sans-serif"].join(","),
        padding: "0",
    },
    "& .MuiInputBase-input:not(textarea)": {
        fontFamily: ["sf-pro-display-regular, system-ui, sans-serif"].join(","),
        padding: "14px 17px",
    },
    "& .MuiInputBase-root": {
        borderRadius: 8,
    },
    "& .Mui-error": {
        fontFamily: ["sf-pro-display-regular, system-ui, sans-serif"].join(","),
    },
}));

export const GlobalSelect = styled(Select)(({ theme }) => ({
    borderRadius: 8,
    fontSize: 14,
    lineHeight: "17px",
    letterSpacing: 0,
    marginBottom: 18,
    border: 0,
    color: theme.palette.primary.main,
    fontFamily: ["sf-pro-display-regular, system-ui, sans-serif"].join(","),
    "& > div": {
        minHeight: "auto !important",
    },
    "& > input": {
        padding: "15px 17px",
        border: 0,
    },
    "& > fieldset": {
        border: "1px solid",
        borderColor: theme.palette.otherColors.borderInput,
    },
    "& > svg": { color: theme.palette.primary.main },
}));

export const GlobalRadioGroup = styled(RadioGroup)(({ theme }) => ({
    marginBottom: 18,
    border: 0,
    color: theme.palette.otherColors.radioColor,
    "& .MuiRadio-root": {
        color: theme.palette.otherColors.radioColor,
    },
    "& .MuiRadio-root.Mui-checked, & .MuiRadio-root.Mui-checked + .MuiTypography-root": {
        color: theme.palette.siteOrange.main,
    },
    "& .MuiTypography-root": {
        fontFamily: ["sf-pro-display-regular, system-ui, sans-serif"].join(","),
        fontSize: 14,
        lineHeight: "17px",
    },
    "& .Mui-error": {
        fontFamily: ["sf-pro-display-regular, system-ui, sans-serif"].join(","),
    },
}));

export const GlobalDatePicker = styled(MobileDatePicker)(({ theme }) => ({
    marginBottom: 18,
    fontSize: 14,
    lineHeight: "17px",
    letterSpacing: 0,
    border: 0,
    color: theme.palette.primary.main,
    "&.Mui-focused": {
        borderColor: theme.palette.otherColors.borderInput,
    },
    "& .MuiInputBase-input": {
        fontFamily: ["sf-pro-display-regular, system-ui, sans-serif"].join(","),
        padding: "14px 17px",
    },
    "& .MuiInputBase-root": {
        borderRadius: 8,
        outline: "none",
    },
    "& .Mui-error": {
        fontFamily: ["sf-pro-display-regular, system-ui, sans-serif"].join(","),
    },
}));

export const GlobalTextarea = styled(TextareaAutosize)(({ theme }) => ({
    fontSize: 14,
    lineHeight: "17px",
    letterSpacing: 0,
    marginBottom: 18,
    borderRadius: 8,
    borderColor: theme.palette.otherColors.borderInput,
    color: theme.palette.primary.main,
    padding: "13px 17px",
    width: "100%",
    height: "300px",
    fontWeight: 400,
    fontFamily: ["sf-pro-display-regular, system-ui, sans-serif"].join(","),
    "&:focus": {
        outline: "none",
        borderColor: theme.palette.otherColors.borderInput,
    },
    "&::placeholder": {
        color: theme.palette.otherColors.radioColor,
    },
    "& .Mui-error": {
        fontFamily: ["sf-pro-display-regular, system-ui, sans-serif"].join(","),
    },
}));
