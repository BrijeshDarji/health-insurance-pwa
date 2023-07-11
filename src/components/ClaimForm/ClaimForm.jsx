import React, { memo, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
    MainContainer,
    Header,
    StepperHeader,
    BtnGroup,
    BackButton,
    NextButton,
    FormsContainer,
} from "./ClaimForm.style.js";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import ClaimPolicyHolderDetails from "./ClaimPolicyHolderDetails";
import ClaimPatientDetails from "./ClaimPatientDetails";
import ClaimDescription from "./ClaimDescription";
import ClaimVisitDetails from "./ClaimVisitDetails";
import ClaimDocuments from "./ClaimDocuments";
import ClaimFormPreview from "./ClaimFormPreview";

import { URL_CLAIM_SUCCESS, URL_WELCOME_SCREEN } from "../../helpers/SitePath";

function ClaimForm() {
    const navigate = useNavigate();

    const [activeStep, setActiveStep] = useState(1);

    const getStepContent = () => {
        switch (activeStep) {
            case 1:
                return <ClaimPolicyHolderDetails />;

            case 2:
                return <ClaimPatientDetails />;

            case 3:
                return <ClaimDescription />;

            case 4:
                return <ClaimVisitDetails />;

            case 5:
                return <ClaimDocuments />;

            case 6:
                return <ClaimFormPreview />;

            default:
                return null;
        }
    };

    const goToPreviousPage = () => {
        if (activeStep === 1) {
            navigate(URL_WELCOME_SCREEN);
        } else {
            setActiveStep(activeStep - 1);
        }
    };

    const goToNextPage = () => {
        setActiveStep(activeStep + 1);
    };

    const handleSubmit = () => {
        navigate(URL_CLAIM_SUCCESS);
    };

    return (
        <MainContainer>
            {/* Main header */}
            <Header>
                <ArrowBackIcon />
                <p>Claim</p>
            </Header>
            <StepperHeader>
                <p>Policy Details</p>
            </StepperHeader>
            <FormsContainer>{getStepContent()}</FormsContainer>
            {/* Back and Next Buttons */}
            <BtnGroup>
                <BackButton variant="contained" onClick={goToPreviousPage}>
                    Back
                </BackButton>
                {activeStep === 6 ? (
                    <NextButton variant="contained" onClick={handleSubmit}>
                        {" "}
                        Submit
                    </NextButton>
                ) : (
                    <NextButton variant="contained" onClick={goToNextPage}>
                        {activeStep === 5 ? "Preview" : "Next"}
                    </NextButton>
                )}
            </BtnGroup>
        </MainContainer>
    );
}

export default memo(ClaimForm);
