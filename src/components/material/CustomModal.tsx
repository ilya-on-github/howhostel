import React from 'react';

import {createStyles} from "@material-ui/styles";
import Modal, {ModalProps} from "@material-ui/core/Modal";
import {makeStyles, Theme} from "@material-ui/core/styles";
import ClearIcon from "@material-ui/icons/Clear";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        backdrop: {
        },
        paper: {
            width: '36rem',
            maxWidth: '100%',
            backgroundColor: theme.palette.background.paper,
            border: 'none',
            boxShadow: theme.shadows[5],
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            maxHeight: '100%',
            display: 'flex',
            flexDirection: 'column',
        },
        header: {
            textAlign: 'right',
        },
        content: {
            padding: '0 4.5rem 2rem 4.5rem',
            overflowY: 'auto',
        }
    }),
);

const CustomModal = (props: ModalProps) => {
    const classes = useStyles();
    const closeClickHandler = (e: any) => {
        if (props.onClose) {
            props.onClose(e, 'escapeKeyDown');
        }
    };

    return (
        <Modal {...props} className={[props.className, classes.backdrop].join(' ')}>
            <div className={classes.paper}>
                <div className={classes.header}>
                    <IconButton onClick={closeClickHandler}>
                        <ClearIcon/>
                    </IconButton>
                </div>
                <div className={classes.content}>
                    {props.children}
                </div>
            </div>
        </Modal>
    );
};

export default CustomModal;
