import React from 'react';
import './FeedbackForm.scss';

import SideDrawerHeader from "../SideDrawerHeader/SideDrawerHeader";
import CustomCheckbox from "../material/CustomCheckbox";
import CustomInput from "../material/CustomInput";
import CustomInputLabel from "../material/CustomInputLabel";
import CustomFormControlLabel from "../material/CustomFormControlLabel";
import CustomDrawer from "../material/CustomDrawer";

const FeedbackForm = (props: { open: boolean, onToggle: (open: boolean) => void }) => {

    const drawerHeaderToggleHandler = (open: boolean) => {
        props.onToggle(open);
    };

    const drawerToggleHandler = (open: boolean) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
            props.onToggle(open);
        };

    return (
        <CustomDrawer className="FeedbackForm" anchor="right" open={props.open} onClose={drawerToggleHandler(false)}>
            <div className="drawer-content-wrapper">
                <div className="header">
                    <SideDrawerHeader open={true} onToggle={drawerHeaderToggleHandler}/>
                </div>
                <form className="form" autoComplete="off">
                    <div className="inputs">
                        <div className="input">
                            <CustomInputLabel htmlFor="name" required>Имя</CustomInputLabel>
                            <CustomInput id="name"/>
                        </div>
                        <div className="input">
                            <CustomInputLabel htmlFor="phone" required>Телефон</CustomInputLabel>
                            <CustomInput id="phone"/>
                        </div>
                        <div className="input">
                            <CustomInputLabel htmlFor="email">Электронная почта</CustomInputLabel>
                            <CustomInput id="email"/>
                        </div>
                        <div className="input">
                            <CustomInputLabel htmlFor="comment">Комментарий</CustomInputLabel>
                            <CustomInput id="comment" multiline rows="4"/>
                        </div>
                        <div className="input">
                            <CustomFormControlLabel
                                control={
                                    <CustomCheckbox/>
                                }
                                label="Нажимая кнопку «Отправить», я даю свое согласие на обработку моих персональных данных, в соответствии с Федеральным законом от 27.07.2006 года №152-ФЗ «О персональных данных», на условиях и для целей, определенных в Согласии на обработку персональных данных"
                            />
                        </div>
                    </div>
                    <button className="button-accent">Написать нам</button>
                </form>
            </div>
        </CustomDrawer>
    );
}

export default FeedbackForm;
