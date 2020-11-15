import {withStyles, createStyles, Theme} from "@material-ui/core/styles";
import InputBase from '@material-ui/core/InputBase';

const CustomInput = withStyles((theme: Theme) =>
    createStyles({
        root: {
            'label + &': {
                marginTop: '0.5rem',
            },
        },
        input: {
            borderRadius: 6,
            position: 'relative',
            backgroundColor: '#F5F6F7',
            border: '1px solid #E3E2EA',
            fontSize: 16,
            width: '100%',
            padding: '10px 12px',
            transition: theme.transitions.create(['border-color', 'box-shadow']),
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
    }),
)(InputBase);

export default CustomInput;
