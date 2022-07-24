import { render } from "react-dom";
import { StyledEngineProvider } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import { UserProvider } from "./context/userContext";


import App from "./App";

const rootElement = document.getElementById("root");
render(
   <React.StrictMode>
        <StyledEngineProvider injectFirst>
            <UserProvider>
                <Router>
                    <App />
                </Router>
            </UserProvider>
        </StyledEngineProvider>
   </React.StrictMode>
, rootElement);
