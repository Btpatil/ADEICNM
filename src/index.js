// import { ThemeProvider } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import {theme} from './theme'
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/* <ThemeProvider theme={theme}> */}
            <App />
        {/* </ThemeProvider> */}
    </React.StrictMode>
);

serviceWorkerRegistration.register();
// reportWebVitals();