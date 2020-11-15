import React from "react";
import Checkbox, {CheckboxProps} from "@material-ui/core/Checkbox";
import withStyles from "@material-ui/core/styles/withStyles";

const CustomCheckbox = withStyles({
    root: {
        '&$checked': {
            color: '#EC6B3E',
        },
    },
    checked: {},
})((props: CheckboxProps) => <Checkbox color="default" {...props} />);

export default CustomCheckbox;
