import React from "react";
import {withStyles} from "@material-ui/core/styles";
import FormControlLabel, {FormControlLabelProps} from "@material-ui/core/FormControlLabel";

const CustomFormControlLabel = withStyles({
    root: {
        display: 'flex',
        alignItems: 'flex-start',
        color: 'black',
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
    label: {
        color: '#6B7683',
        fontSize: '0.75rem',
        paddingTop: '12px',
    },
})((props: FormControlLabelProps) => <FormControlLabel {...props} />);

export default CustomFormControlLabel;
