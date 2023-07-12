import React, { memo, useState } from "react";
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
    const [animateClass, setAnimateClass] = useState(false);

    setTimeout(() => {
        setAnimateClass(true);
    }, 1000);

    return (
        <WelcomeContainer
            className={`animated ${animateClass ? "" : "active"}`}
        >
            <img
                src={logoWelcome}
                alt="logo-welcome"
                width="221px"
                height="200px"
                className="welcome-logo"
            />
            <TextMain className="welcome-content">Welcome to Regency</TextMain>
            <TextSub className="welcome-content">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text.
            </TextSub>
            <GlobalButton
                className="welcome-content"
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
