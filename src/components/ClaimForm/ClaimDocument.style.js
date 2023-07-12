
import styled from "@emotion/styled";
import closeFile from "../../assets/images/svg/close-file.svg";

export const DocumentContainer = styled.div`
    margin-bottom: 18px;
    & .head-content {
        font-size: 14px;
        line-height: 17px;
        margin-bottom: 8px;
    }
    &:last-of-type {
        margin: 0;
    }
`;
export const UploadWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 16px;
`;
export const PreviewBox = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border-radius: 8px;
    cursor: pointer;
    border: 1px solid
        ${(props) => props.theme.palette.otherColors.borderInput};
    & > img {
        width: 27px;
        height: 37px;
    }
    &:not(.upload)::before {
        content: "";
        position: absolute;
        top: 2px;
        right: 2px;
        width: 14px;
        height: 14px;
        background: url(${closeFile}) no-repeat top left;
        background-size: 100%;
    }
`;