/**
 *  @description This file is a success page displayed,
 *  when ClaimForm is submitted successfully.
 */

import React, { memo } from "react";

import { URL_WELCOME_SCREEN } from "../../assets/constants/SitePath.js";
import { INFO_MESSAGES, SUCCESS_MESSAGES } from "../../assets/constants/Messages.js";

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
                {SUCCESS_MESSAGES.SUBMITTED}
            </TextMain>

            <TextSub className="claim-success">
                {INFO_MESSAGES.WELCOME.DESCRIPTION}
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
