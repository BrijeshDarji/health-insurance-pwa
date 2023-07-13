import React, { createRef, useCallback, useMemo } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import { SnackbarProvider } from "notistack";

import ErrorBoundary from './components/ErrorBoundary'
import Routing from './routes/Routing.jsx'

import { ThemeSettings } from './assets/ThemeSettings'
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ErrorIcon from '@mui/icons-material/Error';
import './App.css';

function App() {
    /**
     * snackbar customization - START
    */
    const snackbarRef = createRef()
    const onClose = key => snackbarRef.current.closeSnackbar(key)

    const actionDiv = useCallback(key => (
        <IconButton
            color="inherit"
            style={{ padding: "7px" }}
            onClick={() => onClose(key)}
        >
            <CloseIcon className='"snackbar__action__icon"' />
        </IconButton>
        // eslint-disable-next-line
    ), [])

    const errorIcon = useMemo(() => (
        <ErrorIcon
            style={{ padding: "4px" }}
            className='"snackbar__error__icon"'
        />
    ), [])

    /**
     * snackbar customization - END
     */

    return (
        <MuiThemeProvider theme={ThemeSettings}>
            <ThemeProvider theme={ThemeSettings}>
                <SnackbarProvider
                    maxSnack={3}
                    preventDuplicate
                    anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
                    autoHideDuration={3000}
                    ref={snackbarRef}
                    iconVariant={{ error: errorIcon }}
                    action={actionDiv}
                >
                    <ErrorBoundary>
                        <CssBaseline />
                        <Routing />
                    </ErrorBoundary>
                </SnackbarProvider>
            </ThemeProvider>
        </MuiThemeProvider>
    );
}

export default App;
