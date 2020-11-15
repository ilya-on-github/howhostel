import React from "react";

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
import ClearIcon from '@material-ui/icons/Clear';

import './SideDrawerHeader.scss';
import Logo from "../Logo/Logo";

function SideDrawerHeader(props: {
    open: boolean,
    onToggle: (open: boolean) => void,
}) {
    const onToggleClick = (open: boolean) => {
        props.onToggle(open);
    }

    return (
        <div className="SideDrawerHeader">
            <Logo/>
            <IconButton onClick={() => onToggleClick(!props.open)}>
                {props.open ? <ClearIcon/> : <MenuIcon/>}
            </IconButton>
        </div>
    )
}

export default SideDrawerHeader;
