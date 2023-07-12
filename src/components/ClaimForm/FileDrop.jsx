import React, { useCallback, useRef } from 'react'
import { useDropzone } from "react-dropzone"
import AddIcon from "@mui/icons-material/Add";

import docPreview from "../../assets/images/doc-preview.png";
import { AddDocBox, CancelIcon, DocName, FileDropWrapper, PreviewBox, UploadWrapper } from './ClaimDocument.style'

const minBytesFileSize = 0.1
const maxFileSize = 12
const maxBytesFileSize = (maxFileSize * 1000000)

const FileDrop = (props) => {
    const { selectedFiles, type, setSelectedFiles } = props

    const selectedFilesRef = useRef()
    selectedFilesRef.current = selectedFiles

    const onDrop = useCallback(acceptedFiles => {
        if (acceptedFiles?.length) {
            const totalFiles = [...selectedFilesRef.current, ...acceptedFiles]
            const totalFileSize = totalFiles.reduce((previousValue, currentValue) => previousValue + currentValue.size, 0)

            if (totalFileSize > maxBytesFileSize) {
                // enqueueSnackbar(`Total File size is larger than ${maxFileSize} MB.`, { variant: "error" })
                return
            }
            if (totalFileSize < minBytesFileSize) {
                // enqueueSnackbar(`Total File size is smaller than ${minBytesFileSize} Bytes.`, { variant: "error" })
                return
            }
            setSelectedFiles(totalFiles)
        }
        // eslint-disable-next-line
    }, [])

    const getMessage = {
        "file-invalid-type": "Invalid file type.",
        "file-too-large": `File is larger than ${maxFileSize} MB.`
    }

    const onDropRejected = useCallback(rejectedFiles => {
        rejectedFiles.forEach((rejectedFile) => {
            if (rejectedFile?.errors?.length) {
                rejectedFile.errors.forEach(error => {
                    const errorMessage = getMessage[error.code] || error.message
                    console.log(errorMessage, "errorMessage")
                    // enqueueSnackbar(errorMessage, { variant: "error" })
                })
            }
        })
        // eslint-disable-next-line
    }, [])

    const { getRootProps, getInputProps } = useDropzone({
        accept: {
            'image/*': ['.png', '.jpg', '.jpeg'],
            'file/pdf': ['.pdf'],
        },
        minSize: minBytesFileSize,
        maxSize: maxBytesFileSize,
        onDrop,
        onDropRejected,
    })

    const removeAttachment = (file) => {
        const index = selectedFiles.findIndex(ele => ele.name === file.name)

        if (index > -1) {
            const updatedFiles = [...selectedFiles]
            updatedFiles.splice(index, 1)
            setSelectedFiles(updatedFiles)
        }
    }

    return (
        <FileDropWrapper>
            <div className="head-content">{type}</div>
            <UploadWrapper>
                {selectedFiles.map(file => (
                    <PreviewBox>
                        <img src={docPreview} alt="doc-preview" />
                        <DocName>
                            {file.name}

                            <CancelIcon>
                                <div onClick={() => removeAttachment(file)}>
                                    X
                                </div>
                            </CancelIcon>
                        </DocName>
                    </PreviewBox>
                ))}
            </UploadWrapper>

            <div {...getRootProps()}>
                <input {...getInputProps()} />
                <AddDocBox className="upload">
                    <AddIcon />
                </AddDocBox>
            </div>
        </FileDropWrapper>
    )
}

export default FileDrop
