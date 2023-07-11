import React, { memo } from "react";
import {
    MainContainer,
    Header,
    StepperHeader,
    FormsContainer,
    BtnGroup,
    BackButton,
    NextButton,
    PhoneGroup,
} from "./ClaimForm.style.js";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import OutlinedTextInput from "../form_components/OutlinedTextInput";
import OutlinedSelect from "../form_components/OutlinedSelect.jsx";

function ClaimForm() {
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

            {/* Stepper Forms */}
            <FormsContainer>
                <OutlinedTextInput
                    label="First Name"
                    name="policyHolderFirstName"
                    placeholder="Enter first name"
                />
                <OutlinedTextInput
                    label="Last Name"
                    name="policyHolderLastName"
                    placeholder="Enter last name"
                />
                <OutlinedTextInput
                    label="Policy number"
                    name="policyHolderFirstName"
                    placeholder="Enter policy number"
                />
                <OutlinedTextInput
                    label="Email Address"
                    name="policyHolderEmail"
                    placeholder="Enter email address"
                />
                <PhoneGroup>
                    <OutlinedSelect
                        label="Phone Number"
                        name="policyHolderPhoneCode"
                        placeholder="Enter phone number"
                    />
                    <OutlinedTextInput
                        name="policyHolderPhoneNumber"
                        placeholder="Enter phone number"
                        type="number"
                    />
                </PhoneGroup>
            </FormsContainer>

            {/* Back and Next Buttons */}
            <BtnGroup>
                <BackButton variant="contained" href="/welcome">
                    Back
                </BackButton>
                <NextButton variant="contained" href="/claim">
                    Next
                </NextButton>
            </BtnGroup>
        </MainContainer>
    );
}

export default memo(ClaimForm);
