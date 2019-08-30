import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';
import red from '@material-ui/core/colors/red';

// eslint-disable-next-line import/no-mutable-exports
let theme = createMuiTheme({
    typography: {
        fontFamily: ['Lato'].join(','),
        h4: {
            fontFamily: 'Poppins',
            fontWeight: 600,
            fontSize: '1.6.5rem',
        },
    },
    palette: {
        primary: {
            light: '#008CFF',
            main: '#005497',
        },
        secondary: {
            main: '#37CBCF',
            contrastText: '#fff',
        },
        error: red,
        contrastThreshold: 3,
        tonalOffset: 0.2,
    },
    overrides: {
        MuiButton: {
            root: {
                fontFamily: 'Poppins',
                fontWeight: 700,
                textTransform: 'none',
                minWidth: 100,
                minHeight: 40,
            },
        },
    },
});

theme = responsiveFontSizes(theme);

export default theme;
