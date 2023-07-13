/**
 *  @description This file contains system's route list. 
 */

import { lazy } from "react"

import WelcomeScreen from "../components/WelcomeScreen"
import ClaimFormSuccess from "../components/ClaimForm/ClaimFormSuccess.jsx"

import {
    URL_CLAIM,
    URL_CLAIM_SUCCESS,
    URL_WELCOME_SCREEN,
} from "../assets/constants/SitePath"

const ClaimForm = lazy(() => import("../components/ClaimForm/ClaimForm" /* webpackChunkName: 'ClaimForm'*/))

export const RouteList = [
    {
        path: URL_WELCOME_SCREEN,
        exact: true,
        component: WelcomeScreen,
    },
    {
        path: URL_CLAIM,
        exact: true,
        component: ClaimForm,
    },
    {
        path: URL_CLAIM_SUCCESS,
        exact: true,
        component: ClaimFormSuccess,
    },
]
