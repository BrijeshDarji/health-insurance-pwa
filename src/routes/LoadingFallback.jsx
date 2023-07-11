import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import CircularProgress from "@mui/material/CircularProgress";

const Container = styled.div`
    height: 100vh;
    width: 100%;
    font-size: 25px;

    color: ${(props) => props.theme.palette.siteBlack.normal};

    ${(props) => props.theme.mixins.flex("center", "center")};

    flex-direction: "column";
`;

const textCss = css`
    margin-top: 20px;
`;

function LoadingFallback() {
    return (
        <Container>
            <CircularProgress />
            <div className={textCss}>Please wait while page is loading...</div>
        </Container>
    );
}

export default LoadingFallback;
