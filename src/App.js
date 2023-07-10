import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';

import ErrorBoundary from './components/ErrorBoundary'
import Routing from './routes/Routing.jsx'

import { ThemeSettings } from './assets/ThemeSettings'

import './App.css';

function App() {
    return (
        <MuiThemeProvider theme={ThemeSettings}>
            <ThemeProvider theme={ThemeSettings}>
                <ErrorBoundary>
                    <CssBaseline />
                    <Routing />
                </ErrorBoundary>
            </ThemeProvider>
        </MuiThemeProvider>
    );
}

export default App;
