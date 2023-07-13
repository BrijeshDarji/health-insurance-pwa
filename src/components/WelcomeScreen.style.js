import styled from "@emotion/styled";
import { Button } from "@mui/material";

import bgWelcome from "../assets/images/svg/welcome-bg.svg";

export const GlobalButton = styled(Button)({
  boxShadow: "0px 9.000000953674316px 6.000000476837158px 0px #11184A29",
  textTransform: "none",
  fontSize: 18,
  borderRadius: 14,
  padding: "16px",
  lineHeight: "21.48px",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  maxWidth: "500px",
  fontFamily: ["sf-pro-display-regular, system-ui, sans-serif"].join(","),
  "& > span, & > p": {
    marginLeft: "auto",
  },
});

export const WelcomeContainer = styled.div`
    height: 100vh;
    width: 100%;
    padding: 0 24px 20px 24px;
    position: relative;
    overflow: hidden;

    color: ${(props) => props.theme.palette.primary.main};

    ${(props) => props.theme.mixins.flex("center", "flex-end")};

    flex-direction: column;

    &::before{
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: url(${bgWelcome}) no-repeat top left;
      background-size: 71%;
      transition: 0.12s ease-in-out;
    }
    &.animated.active{
      &::before{
        left: -40%;
        top: -40%;
        transition: 0.12s ease-in-out;
      }
    }
    
    &.claim-success{
      background: none;
      justify-content: flex-start;
      padding-top: 63px;
      &::before{
        content: unset;
      }
    }
  `;

export const TextMain = styled.p`
    font-family: "sf-pro-display-medium";
    font-size: 28px;
    font-weight: 600;
    line-height: 33px;
    letter-spacing: 0em;
    margin: 100px 0 16px 0;
    &.claim-success{
      margin: 34px 0 16px 0;
    }
  `;

export const TextSub = styled.p`
    font-family: "sf-pro-display-regular";
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: center;
    margin-bottom: 61px;
    max-width: 500px;
    color: ${(props) => props.theme.palette.primary.subText};
    &.claim-success{
      margin-bottom: 34px;
    }
  `;