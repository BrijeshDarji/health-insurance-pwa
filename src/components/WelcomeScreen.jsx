import React, { memo } from "react";
import {
    WelcomeContainer,
    TextMain,
    TextSub,
    GlobalButton,
} from "./WelcomeScreen.style.js";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import logoWelcome from "../assets/images/svg/logo-welcome.svg";
import { URL_CLAIM } from "../helpers/SitePath.js";

function WelcomeScreen() {
    return (
        <WelcomeContainer>
            <img
                src={logoWelcome}
                alt="logo-welcome"
                width="221px"
                height="200px"
            />
            <TextMain>Welcome to Regency</TextMain>
            <TextSub>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text.
            </TextSub>
            <GlobalButton
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                size="24px"
                href={URL_CLAIM}
            >
                <p>Claim Now</p>
            </GlobalButton>
        </WelcomeContainer>
    );
}

export default memo(WelcomeScreen);
