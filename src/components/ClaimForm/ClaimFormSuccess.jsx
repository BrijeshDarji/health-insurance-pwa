import React, { memo } from "react";

import { URL_WELCOME_SCREEN } from "../../assets/constants/SitePath.js";

import {
    WelcomeContainer,
    TextMain,
    TextSub,
    GlobalButton,
} from "./../WelcomeScreen.style.js";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import logoSuccess from "../../assets/images/svg/success-logo.svg";

function ClaimFormSuccess() {
    return (
        <WelcomeContainer className="claim-success">
            <img
                src={logoSuccess}
                alt="logo-welcome"
                width="227px"
                height="227px"
            />

            <TextMain className="claim-success">
                Successfully Submitted
            </TextMain>

            <TextSub className="claim-success">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text.
            </TextSub>

            <GlobalButton
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                size="24px"
                href={URL_WELCOME_SCREEN}
            >
                <p>Close</p>
            </GlobalButton>
        </WelcomeContainer>
    );
}

export default memo(ClaimFormSuccess);
