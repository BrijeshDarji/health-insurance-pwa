import React, { memo, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";

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
import { GetFormikObject } from "../../helpers/Utils.js";
import { POLICY_HOLDER_DETAIL_FIELDS } from "../../helpers/FormFields.js";

function ClaimForm() {
    const navigate = useNavigate();

    const [activeStep, setActiveStep] = useState(1);
    const [formikObj1, setFormikObj1] = useState({})

    const formValidator1 = useFormik(formikObj1)

    useEffect(() => {
        const defaultValues = {
            "policyHolderPhoneCode": "+91",
        }
        handleFormikValues(defaultValues)
        // eslint-disable-next-line
    }, [])

    const handleFormikValues = (rows = {}) => {
        setUpFormik(POLICY_HOLDER_DETAIL_FIELDS, setFormikObj1, rows)
    }

    const setUpFormik = (fields, setter, rows) => {
        const validator = GetFormikObject(fields, rows)
        setter(validator)
    }

    const getStepContent = () => {
        switch (activeStep) {
            case 1:
                return <ClaimPolicyHolderDetails formik={formValidator1} />;

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
        switch (activeStep) {
            case 1:
                formValidator1.handleSubmit()

                if (!formValidator1.isValid) {
                    return
                }
                break

            default:
                break
        }
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
