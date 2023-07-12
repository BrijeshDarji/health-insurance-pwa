import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const MainContainer = styled.div`
    height: 100vh;
    width: 100%;
    color: ${(props) => props.theme.palette.primary.main};
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
    }
`;
export const FormsContainer = styled.div`
    height: calc(100% - 175px);
    width: 100%;
    padding: 24px;
    overflow: auto;
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
    align-items: flex-end;
    width: 100%;
    gap: 0 8px;
`;

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
    background: theme.palette.otherColors.borderSemiLight,
    fontFamily: ["sf-pro-display-medium"].join(","),
}));