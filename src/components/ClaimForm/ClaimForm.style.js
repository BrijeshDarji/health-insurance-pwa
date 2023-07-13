import styled from "@emotion/styled";
import { Button } from "@mui/material";

import LoadingButton from '@mui/lab/LoadingButton';

export const MainContainer = styled.div`
    height: 100vh;
    width: 100%;
    color: ${(props) => props.theme.palette.primary.main};
    max-width: 720px;
    margin: 0 auto;
`;

export const Header = styled.div`
    height: 52px;
    width: 100%;
    padding: 14px 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid
    ${(props) => props.theme.palette.otherColors.borderSemiLight};
    & > svg {
        margin-right: -24px;
    }
    & > p {
        font-family: "sf-pro-display-medium";
        font-size: 20px;
        font-weight: 600;
        line-height: 24px;
        letter-spacing: 0px;
        margin: 0 auto;
    }
`;

export const StepperHeader = styled.div`
    height: 50px;
    width: 100%;
    padding: 0 16px 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.palette.siteOrange.main};
    border-bottom: 6px solid
    ${(props) => props.theme.palette.otherColors.borderSemiLight};
    & > p {
        font-family: "sf-pro-display-medium";
        font-size: 12px;
        font-weight: 600;
        line-height: 14px;
        letter-spacing: 0px;
        margin-left: auto;
        text-align: center;
    }
`;

export const FormsContainer = styled.div`
    height: calc(100% - 175px);
    width: 100%;
    padding: 24px;
    overflow: auto;
    &.claim-preview{
        height: calc(100% - 125px);
        padding: 0;
    }
    & > p {
        font-family: "sf-pro-display-medium";
        font-size: 12px;
        font-weight: 600;
        line-height: 14px;
        letter-spacing: 0px;
        margin-left: auto;
    }
`;

export const BtnGroup = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 0 20px;
    padding: 0 24px;
`;

export const PhoneGroup = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    align-items: flex-start;
    width: 100%;
    gap: 0 8px;
    & > div:last-of-type{
        margin-top: 17px;
    }
`;

export const SubmitButton = styled(LoadingButton)({
    boxShadow: "none",
    textTransform: "none",
    fontSize: 18,
    borderRadius: 13,
    padding: "17px",
    lineHeight: "21.48px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    fontFamily: ["sf-pro-display-medium"].join(","),
    "& > span, & > p": {
        marginLeft: "auto",
    },
});

export const NextButton = styled(Button)({
    boxShadow: "none",
    textTransform: "none",
    fontSize: 18,
    borderRadius: 13,
    padding: "17px",
    lineHeight: "21.48px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    fontFamily: ["sf-pro-display-medium"].join(","),
});

export const BackButton = styled(Button)(({ theme }) => ({
    boxShadow: "none",
    textTransform: "none",
    fontSize: 18,
    borderRadius: 13,
    padding: "17px",
    lineHeight: "21.48px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.otherColors.borderSemiLight,
    fontFamily: ["sf-pro-display-medium"].join(","),
    '&:active': {
        backgroundColor: theme.palette.otherColors.borderSemiLight,
    },
    '&:hover': {
        boxShadow: "none",
        backgroundColor: theme.palette.otherColors.borderSemiLight,
    },
    '&:focus': {
        boxShadow: "none",
        backgroundColor: theme.palette.otherColors.borderSemiLight,
    },
}));

export const Steps = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 100%;
`
export const StepsDigit = styled.div`
    width: 48px;
    height: 100%;
    color: ${(props) => props.theme.palette.primary.main};
    letter-spacing: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    
    & > span{
        width: 24px;
        height: 24px;
        border-radius: 50%;
        font-size: 12px;
        line-height: 14px;
        font-family: "sf-pro-display-medium";
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${(props) => props.theme.palette.otherColors.stepperDefaultLabel};
        border: 1px solid ${(props) => props.theme.palette.otherColors.stepperBorder};
        background-color: transparent;
        &.icon img{
            width: 14px;
        }
    }
    &.active > span{
        color: ${(props) => props.theme.palette.siteWhite.main};
        border-color: ${(props) => props.theme.palette.siteOrange.main};
        background-color: ${(props) => props.theme.palette.siteOrange.main};
    }

    &.active::after{
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 5px;
        background-color: ${(props) => props.theme.palette.siteOrange.main};
    }
`;
