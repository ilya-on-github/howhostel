import React from "react";
import {withStyles} from "@material-ui/core/styles";
import InputLabel, {InputLabelProps} from "@material-ui/core/InputLabel";

const CustomInputLabel = withStyles({
    root: {
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
    asterisk: {
        color: '#EC6B3E',
    },
})((props: InputLabelProps) => <InputLabel {...props} />);

export default CustomInputLabel;
