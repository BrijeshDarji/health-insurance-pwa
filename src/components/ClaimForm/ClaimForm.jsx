/**
 *  @description This file is a main ClaimForm, 
 *  which is container for its steppers, 
 *  and handles next step, submit button functionality.
 */

import React, { memo, useEffect, useState } from "react";
import dayjs from 'dayjs';
import SendIcon from '@mui/icons-material/Send';
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useSnackbar } from 'notistack'

import ClaimPolicyHolderDetails from "./ClaimPolicyHolderDetails";
import ClaimPatientDetails from "./ClaimPatientDetails";
import ClaimDescription from "./ClaimDescription";
import ClaimVisitDetails from "./ClaimVisitDetails";
import ClaimDocuments from "./ClaimDocuments";
import ClaimFormPreview from "./ClaimFormPreview";

import { GetFormikObject, getJsonForPabbly } from "../../helpers/Utils.js";
import { ERROR_MESSAGES } from "../../assets/constants/Messages.js";
import { DATE_FORMAT, STEPPER_LABELS } from "../../assets/constants/Constant";
import { FORM_SUBMIT_PATH } from "../../assets/constants/ApiPath";
import { postApi } from "../../helpers/ApiHelper";

import {
    URL_CLAIM_SUCCESS,
    URL_WELCOME_SCREEN,
} from "../../assets/constants/SitePath.js";

import {
    DESCRIPTION_OF_CLAIM_FIELDS,
    PATIENT_DETAIL_FIELDS,
    POLICY_HOLDER_DETAIL_FIELDS,
    VISIT_DETAIL_FIELDS,
} from "../../assets/constants/FormFields.js";

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
    SubmitButton,
} from "./ClaimForm.style.js";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import checkRight from "./../../assets/images/svg/checkRight.svg";

function ClaimForm() {
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar()

    const [selectedDocs, setSelectedDocs] = useState([])
    const [selectedReceipts, setSelectedReceipts] = useState([])
    const [selectedPaymentDocs, setSelectedPaymentDocs] = useState([])
    const [selectedMedDocs, setSelectedMedDocs] = useState([])

    const [loading, setLoading] = useState(false)
    const [activeStep, setActiveStep] = useState(5);
    const [formikObj1, setFormikObj1] = useState({})
    const [formikObj2, setFormikObj2] = useState({})
    const [formikObj3, setFormikObj3] = useState({})
    const [formikObj4, setFormikObj4] = useState({})

    const formValidator1 = useFormik(formikObj1)
    const formValidator2 = useFormik(formikObj2)
    const formValidator3 = useFormik(formikObj3)
    const formValidator4 = useFormik(formikObj4)

    useEffect(() => {
        const defaultValues = {
            "policyHolderPhoneCode": "+91",
            "patientPhoneCode": "+91",
            "gender": "MALE",
            "relationshipToPolicyHolder": "MY_SELF",
            "dateOfBirth": dayjs().format(DATE_FORMAT),
            "dateOfVisit": dayjs().format(DATE_FORMAT),
        }
        handleFormikValues(defaultValues)
        // eslint-disable-next-line
    }, [])

    const handleFormikValues = (rows = {}) => {
        setUpFormik(POLICY_HOLDER_DETAIL_FIELDS, setFormikObj1, rows)
        setUpFormik(PATIENT_DETAIL_FIELDS, setFormikObj2, rows)
        setUpFormik(DESCRIPTION_OF_CLAIM_FIELDS, setFormikObj3, rows)
        setUpFormik(VISIT_DETAIL_FIELDS, setFormikObj4, rows)
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
                return <ClaimPatientDetails formik={formValidator2} />;

            case 3:
                return <ClaimDescription formik={formValidator3} />;

            case 4:
                return <ClaimVisitDetails formik={formValidator4} />;

            case 5:
                return (
                    <ClaimDocuments
                        selectedDocs={selectedDocs}
                        setSelectedDocs={setSelectedDocs}
                        selectedReceipts={selectedReceipts}
                        setSelectedReceipts={setSelectedReceipts}
                        selectedPaymentDocs={selectedPaymentDocs}
                        setSelectedPaymentDocs={setSelectedPaymentDocs}
                        selectedMedDocs={selectedMedDocs}
                        setSelectedMedDocs={setSelectedMedDocs}
                    />
                );

            case 6:
                return (
                    <ClaimFormPreview
                        selectedDocs={selectedDocs}
                        selectedReceipts={selectedReceipts}
                        selectedPaymentDocs={selectedPaymentDocs}
                        selectedMedDocs={selectedMedDocs}
                        policyHolderDetails={formValidator1.values || {}}
                        patientDetails={formValidator2.values || {}}
                        claimDescription={formValidator3.values || {}}
                        claimVisitDetails={formValidator4.values || {}}
                    />
                )

            default:
                return null;
        }
    };

    const goToPreviousPage = () => {
        if (activeStep === 1) {
            navigate(URL_WELCOME_SCREEN);
        }
        else {
            setActiveStep(activeStep - 1);
        }
    };

    const goToNextPage = () => {
        switch (activeStep) {
            case 1: {
                formValidator1.handleSubmit()

                if (!formValidator1.isValid) {
                    enqueueSnackbar(ERROR_MESSAGES.ALL_REQUIRED, { variant: "error" })
                    return
                }
                break
            }

            case 2: {
                formValidator2.handleSubmit()

                if (!formValidator2.isValid) {
                    enqueueSnackbar(ERROR_MESSAGES.ALL_REQUIRED, { variant: "error" })
                    return
                }
                break
            }

            case 3: {
                formValidator3.handleSubmit()

                if (!formValidator3.isValid) {
                    enqueueSnackbar(ERROR_MESSAGES.ALL_REQUIRED, { variant: "error" })
                    return
                }
                break
            }

            case 4: {
                formValidator4.handleSubmit()

                if (!formValidator4.isValid) {
                    enqueueSnackbar(ERROR_MESSAGES.ALL_REQUIRED, { variant: "error" })
                    return
                }
                break
            }

            case 5: {
                if (
                    !selectedDocs.length &&
                    !selectedReceipts.length &&
                    !selectedPaymentDocs.length &&
                    !selectedMedDocs.length
                ) {
                    enqueueSnackbar(ERROR_MESSAGES.DOCUMENTS.ADD_DOCUMENT, { variant: "error" })
                    return
                }
                break
            }

            default:
                break
        }
        setActiveStep(activeStep + 1);
    };

    const handleSubmit = async () => {
        if (!formValidator1.isValid ||
            !formValidator2.isValid ||
            !formValidator3.isValid ||
            !formValidator4.isValid
        ) {
            enqueueSnackbar(ERROR_MESSAGES.PREVIEW_WARNING, { variant: "error" })
            return
        }

        const policyHolderDetails = formValidator1.values || {}
        const patientDetails = formValidator2.values || {}
        const claimDescription = formValidator3.values || {}
        const claimVisitDetails = formValidator4.values || {}

        const params = await getJsonForPabbly({
            policyHolderDetails,
            patientDetails,
            claimDescription,
            claimVisitDetails,
            selectedDocs,
            selectedReceipts,
            selectedPaymentDocs,
            selectedMedDocs,
        })

        setLoading(true)

        postApi(FORM_SUBMIT_PATH, params)
            .then((response) => {
                if (response) {
                    if (response.data && response.status) {
                        setLoading(false)
                        navigate(URL_CLAIM_SUCCESS);
                    }
                    else if (!response.status && response.message) {
                        setLoading(false)
                        enqueueSnackbar(response.message, { variant: "error" })
                    }
                }
            });
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
                        {STEPPER_LABELS.map((items) => (
                            <StepsDigit
                                className={items.id <= activeStep && "active"}
                                key={items.id}
                            >
                                {items.id < activeStep
                                    ? (
                                        <span className="icon">
                                            <img
                                                src={checkRight}
                                                alt="check-right"
                                            />
                                        </span>
                                    )
                                    : (
                                        <span>{items.id}</span>
                                    )
                                }
                            </StepsDigit>
                        ))}
                    </Steps>

                    {STEPPER_LABELS.map((items) =>
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
                <BackButton
                    variant="contained"
                    onClick={goToPreviousPage}
                >
                    Back
                </BackButton>

                {activeStep === 6
                    ? (
                        <SubmitButton
                            loading={loading}
                            loadingPosition="end"
                            variant="contained"
                            onClick={handleSubmit}
                            endIcon={<SendIcon />}
                        >
                            <p>Submit</p>
                        </SubmitButton>
                    )
                    : (
                        <NextButton
                            variant="contained"
                            onClick={goToNextPage}
                        >
                            {activeStep === 5 ? "Preview" : "Next"}
                        </NextButton>
                    )
                }
            </BtnGroup >
        </MainContainer >
    );
}

export default memo(ClaimForm);
