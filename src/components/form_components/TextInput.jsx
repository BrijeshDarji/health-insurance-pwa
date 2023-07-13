/**
 *  @description This file contains TextInput component, which will be used in whole system.
 */

import React from "react";

import { formAttributes } from "../../helpers/Utils"

import { GlobalInputLabel, GlobalInput } from "./FormComponents.style.js";

function TextInput({
    label,
    hideLabel = false,
    name,
    placeholder,
    disabled,
    type,
    formik,
    required = false,
}) {
    const formAttr = formAttributes(formik, name)

    return (
        <div>
            <GlobalInputLabel htmlFor={`outlined-input-for-${name}`}>
                {
                    hideLabel
                        ? ""
                        : (
                            label + (
                                required
                                    ? " *"
                                    : ""
                            )
                        )
                }
            </GlobalInputLabel>

            <GlobalInput
                color="primary"
                fullWidth
                disabled={disabled}
                placeholder={placeholder}
                type={type}
                {...formAttr}
            />
        </div>
    );
}

export default TextInput;
