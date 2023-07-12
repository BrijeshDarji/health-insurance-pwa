import OutlinedInput from "@mui/material/OutlinedInput";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import styled from "@emotion/styled";

export const GlobalInputLabel = styled(InputLabel)(({ theme }) => ({
    fontSize: 14,
    lineHeight: "17px",
    letterSpacing: 0,
    marginBottom: 8,
    color: theme.palette.primary.main,
    fontFamily: ["sf-pro-display-medium"].join(","),
}));
export const GlobalInput = styled(OutlinedInput)(({ theme }) => ({
    borderRadius: 8,
    fontSize: 14,
    lineHeight: "17px",
    letterSpacing: 0,
    marginBottom: 18,
    border: 0,
    color: theme.palette.primary.main,
    fontFamily: ["sf-pro-display-regular"].join(","),
    "& > input": {
        padding: "15px 17px",
        border: 0,
    },
    "& > fieldset": {
        border: "1px solid",
        borderColor: theme.palette.otherColors.borderInput,
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
    fontFamily: ["sf-pro-display-regular"].join(","),
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