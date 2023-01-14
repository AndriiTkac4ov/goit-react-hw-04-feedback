import React from 'react';
import ReactDOM from 'react-dom/client';
import Feedback from 'components/Feedback/Feedback';
// import AppFeedback from 'components/AppFEEDBACK';
import './index.css';
import { theme } from './constants/theme';
import { ThemeProvider } from 'styled-components';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Feedback />
      {/* <AppFeedback /> */}
    </ThemeProvider>
  </React.StrictMode>
);
