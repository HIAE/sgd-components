import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';
import GlobalStyles from './global-styles';
import App from './App';

ReactDOM.render(
    <>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
        <GlobalStyles />
    </>,
    document.getElementById('root'));
