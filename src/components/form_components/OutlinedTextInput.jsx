import React from 'react'
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';

// import { formAttributes } from "../../helpers/Utils"

function OutlinedTextInput({
    label,
    name,
    placeholder,
    disabled,
    formik,
}) {
    // const formAttr = formAttributes(formik, name)
    return (
        <>
            <InputLabel htmlFor={`outlined-input-for-${name}`}>
                {label}
            </InputLabel>

            <OutlinedInput
                color="primary"
                fullWidth
                disabled={disabled}
                placeholder={placeholder}
            // {...formAttr}
            />
        </>
    )
}

export default OutlinedTextInput
