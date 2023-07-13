import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import { SnackbarProvider } from "notistack";

import ErrorBoundary from './components/ErrorBoundary'
import Routing from './routes/Routing.jsx'

import { ThemeSettings } from './assets/ThemeSettings'

import './App.css';

function App() {
    return (
        <MuiThemeProvider theme={ThemeSettings}>
            <ThemeProvider theme={ThemeSettings}>
                <SnackbarProvider
                    maxSnack={3}
                    preventDuplicate
                    anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
                    autoHideDuration={3000}
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
