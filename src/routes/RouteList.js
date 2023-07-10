import WelcomeScreen from "../components/WelcomeScreen"
import ClaimForm from "../components/ClaimForm/ClaimForm"
import ClaimFormPreview from "../components/ClaimForm/ClaimFormPreview"
import ClaimFormSuccess from "../components/ClaimForm/ClaimFormSuccess.jsx"

export const RouteList = [
    {
        path: "/",
        exact: true,
        component: WelcomeScreen,
    },
    {
        path: "/welcome",
        exact: true,
        component: WelcomeScreen,
    },
    {
        path: "/claim",
        exact: true,
        component: ClaimForm,
    },
    {
        path: "/claimPreview",
        exact: true,
        component: ClaimFormPreview,
    },
    {
        path: "/claimSuccess",
        exact: true,
        component: ClaimFormSuccess,
    },
]
