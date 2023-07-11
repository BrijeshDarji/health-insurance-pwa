import WelcomeScreen from "../components/WelcomeScreen"
import ClaimForm from "../components/ClaimForm/ClaimForm"
import ClaimFormSuccess from "../components/ClaimForm/ClaimFormSuccess.jsx"

import {
    URL_CLAIM,
    URL_CLAIM_SUCCESS,
    URL_WELCOME_SCREEN,
} from "../helpers/SitePath"

export const RouteList = [
    {
        path: "/",
        exact: true,
        component: WelcomeScreen,
    },
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
