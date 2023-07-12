import { Grid } from "@mui/material";
import React, { memo } from "react";
import {
    CardsWrapper,
    ClaimPreview,
    LabelClaim,
    ValueClaim,
    Wrapper,
} from "./ClaimFormPreview.style";

function ClaimFormPreview() {
    const claimPreviewObj = [
        {
            id: 1,
            formDetail: "Policy Details",
            meta: [
                {
                    group: [
                        {
                            label: "First Name",
                            value: "John",
                        },
                        {
                            label: "Last Name",
                            value: "Smith",
                        },
                    ],
                },
                {
                    label: "Policy Number",
                    value: "12512515512",
                },
                {
                    label: "Email Address",
                    value: "johnsmith12@gmail.com",
                },
                {
                    label: "Phone Number",
                    value: "+1-1251-251-1251",
                },
            ],
        },
        {
            id: 2,
            formDetail: "Patient Details",
            meta: [
                {
                    group: [
                        {
                            label: "First Name",
                            value: "John",
                        },
                        {
                            label: "Last Name",
                            value: "Smith",
                        },
                        {
                            label: "Gender",
                            value: "Male",
                        },
                        {
                            label: "Date of Birth",
                            value: "22/12/1994",
                        },
                    ],
                },
                {
                    label: "Policy Number",
                    value: "12512515512",
                },
                {
                    label: "Email Address",
                    value: "johnsmith12@gmail.com",
                },
                {
                    label: "Phone Number",
                    value: "+1-1251-251-1251",
                },
                {
                    label: "Relationship to Policy Holder",
                    value: "Wife",
                },
            ],
        },
        {
            id: 3,
            formDetail: "Description of Claim",
            meta: [
                {
                    label: "Condition",
                    value: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
                },
            ],
        },
        {
            id: 4,
            formDetail: "Visit Information",
            meta: [
                {
                    label: "Date of Visit",
                    value: "07/07/2023",
                },
                {
                    label: "Location",
                    value: "6201 Harry Hines Blvd, Dallas, TX 75390, United States",
                },
            ],
        },
        {
            id: 5,
            formDetail: "Documents",
            meta: [],
        },
    ];
    return (
        <>
            {claimPreviewObj.map((items) => (
                <ClaimPreview key={items.id}>
                    <p className="heading">{items.formDetail}</p>
                    <CardsWrapper>
                        {items.meta.map((lists, index) =>
                            lists.group ? (
                                <Grid container spacing={0} key={index}>
                                    {lists.group.map((groups, index) => (
                                        <Grid item xs={6} md={6} key={index}>
                                            <Wrapper>
                                                <LabelClaim>
                                                    {groups.label}
                                                </LabelClaim>
                                                <ValueClaim>
                                                    {groups.value}
                                                </ValueClaim>
                                            </Wrapper>
                                        </Grid>
                                    ))}
                                </Grid>
                            ) : (
                                <Wrapper key={index}>
                                    <LabelClaim>{lists.label}</LabelClaim>
                                    <ValueClaim>{lists.value}</ValueClaim>
                                </Wrapper>
                            )
                        )}
                    </CardsWrapper>
                </ClaimPreview>
            ))}
        </>
    );
}

export default memo(ClaimFormPreview);
