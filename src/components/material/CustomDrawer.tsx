import React from "react";
import Drawer, {DrawerProps} from "@material-ui/core/Drawer";
import withStyles from "@material-ui/core/styles/withStyles";

const CustomDrawer = withStyles({
    root: {
    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch'
    },
})((props: DrawerProps) => <Drawer color="default" {...props} />);

export default CustomDrawer;
