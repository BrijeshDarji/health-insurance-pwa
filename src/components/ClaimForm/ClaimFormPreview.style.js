import styled from "@emotion/styled";

export const ClaimPreview = styled.div`
    width: 100%;
    padding: 24px;
    border-bottom: 4px solid
        ${(props) => props.theme.palette.otherColors.borderSemiLight};
    font-family: "sf-pro-display-regular";
    &:last-of-type{
        border: none;
    }
    & > p.heading {
        font-family: "sf-pro-display-medium";
        font-size: 16px;
        font-weight: 600;
        line-height: 19px;
        margin-bottom: 14px;
        color: ${(props) => props.theme.palette.siteOrange.main};
    }
`;

export const CardsWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: auto;
    & .MuiGrid-container .MuiGrid-item {
        margin-bottom: 12px;
    }
`;

export const Wrapper = styled.div`
    margin-bottom: 12px;
    &:last-of-type {
        margin: 0;
    }
`;

export const LabelClaim = styled.div`
    font-size: 12px;
    line-height: 14px;
    margin-bottom: 4px;
    color: ${(props) => props.theme.palette.otherColors.radioColor};
`;

export const ValueClaim = styled.div`
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    margin: 5px 0px;
`;
