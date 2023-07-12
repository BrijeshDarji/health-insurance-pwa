
import styled from "@emotion/styled";

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
    flex-direction:column;
    gap: 16px;
`;
export const PreviewBox = styled.div`
    height: 50px;
    display: flex;
    position: relative;
    border-radius: 8px;
    & > img {
        width: 27px;
        height: 37px;
    }
`;

export const AddDocBox = styled.div`
width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    cursor:pointer;
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
        background-size: 100%;
    }
`;

export const DocName = styled.div`
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    margin-left:20px;
    display:flex;
    align-items:center;
    word-break:break-word;
`;

export const CancelIcon = styled.div`
    color: #ffffff;
    margin-left: 20px;
    padding: 2px 7px;
    background: #979797;
    border-radius: 73px;
    font-weight: bold;
    font-size: 13px;
`;

export const FileDropWrapper = styled.div`
    margin-bottom:30px;
`;
