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
    Steps,
    StepsDigit,
} from "./ClaimForm.style.js";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import checkRight from "./../../assets/images/svg/checkRight.svg";

import ClaimPolicyHolderDetails from "./ClaimPolicyHolderDetails";
import ClaimPatientDetails from "./ClaimPatientDetails";
import ClaimDescription from "./ClaimDescription";
import ClaimVisitDetails from "./ClaimVisitDetails";
import ClaimDocuments from "./ClaimDocuments";
import ClaimFormPreview from "./ClaimFormPreview";

import { URL_CLAIM_SUCCESS, URL_WELCOME_SCREEN } from "../../helpers/SitePath";
import { GetFormikObject } from "../../helpers/Utils.js";
import { POLICY_HOLDER_DETAIL_FIELDS } from "../../helpers/FormFields.js";

const stepperLabels = [
    { id: 1, label: "Policy Details" },
    { id: 2, label: "Patient Details" },
    { id: 3, label: "Description of Claim" },
    { id: 4, label: "Visit Information" },
    { id: 5, label: "Documents" },
];

function ClaimForm() {
    const navigate = useNavigate();

    const [selectedDocs, setSelectedDocs] = useState([])
    const [selectedReceipts, setSelectedReceipts] = useState([])
    const [selectedPaymentDocs, setSelectedPaymentDocs] = useState([])
    const [selectedMedDocs, setSelectedMedDocs] = useState([])
    const [activeStep, setActiveStep] = useState(5);
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
                return <ClaimDocuments
                    selectedDocs={selectedDocs}
                    setSelectedDocs={setSelectedDocs}
                    selectedReceipts={selectedReceipts}
                    setSelectedReceipts={setSelectedReceipts}
                    selectedPaymentDocs={selectedPaymentDocs}
                    setSelectedPaymentDocs={setSelectedPaymentDocs}
                    selectedMedDocs={selectedMedDocs}
                    setSelectedMedDocs={setSelectedMedDocs}
                />;

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
                <ArrowBackIcon
                    onClick={goToPreviousPage}
                />

                <p>
                    {activeStep <= 5 ? "Claim" : "Preview"}
                </p>
            </Header>

            {activeStep <= 5 && (
                <StepperHeader>
                    <Steps>
                        {stepperLabels.map((items) => (
                            <StepsDigit
                                className={items.id <= activeStep && "active"}
                                key={items.id}
                            >
                                {items.id < activeStep ? (
                                    <span className="icon">
                                        <img
                                            src={checkRight}
                                            alt="check-right"
                                        />
                                    </span>
                                ) : (
                                    <span>{items.id}</span>
                                )}
                            </StepsDigit>
                        ))}
                    </Steps>

                    {stepperLabels.map(
                        (items) =>
                            activeStep === items.id && (
                                <p key={items.id}>{items.label}</p>
                            )
                    )}
                </StepperHeader>
            )}
            <FormsContainer className={activeStep > 5 && "claim-preview"}>
                {getStepContent()}
            </FormsContainer>
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
