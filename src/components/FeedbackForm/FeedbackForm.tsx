import React, {Component} from 'react';
import './FeedbackForm.scss';

import SideDrawerHeader from "../SideDrawerHeader/SideDrawerHeader";
import CustomCheckbox from "../material/CustomCheckbox";
import CustomInput from "../material/CustomInput";
import CustomInputLabel from "../material/CustomInputLabel";
import CustomFormControlLabel from "../material/CustomFormControlLabel";
import CustomDrawer from "../material/CustomDrawer";
import CustomModal from "../material/CustomModal";

interface FeedbackFormProps {
    open: boolean;
    onToggle: (open: boolean) => void;
}

interface FeedbackFormState {
    isMobile: boolean;
}

class FeedbackForm extends Component<FeedbackFormProps, FeedbackFormState> {

    static isMobile = () => {
        return window.innerWidth < 720;
    }

    constructor(props: FeedbackFormProps) {
        super(props);

        this.state = {
            isMobile: FeedbackForm.isMobile()
        };
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () => {
        const isMobile = FeedbackForm.isMobile();

        if (isMobile !== this.state.isMobile) {
            this.setState(prevState => ({
                ...prevState,
                isMobile: isMobile
            }));
        }
    }

    render() {
        const drawerHeaderToggleHandler = (open: boolean) => {
            this.props.onToggle(open);
        };

        const drawerToggleHandler = (open: boolean) =>
            () => {
                this.props.onToggle(open);
            };

        const modalCloseHandler = () => {
            this.props.onToggle(false);
        }

        const form = (
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
                <button className="button-accent">Отправить</button>
            </form>
        );

        if (this.state.isMobile) {
            return (
                <CustomDrawer className="FeedbackForm-root" anchor="right" open={this.props.open}
                              onClose={drawerToggleHandler(false)}>
                    <div className="FeedbackForm-drawer">
                        <div className="header">
                            <SideDrawerHeader open={true} onToggle={drawerHeaderToggleHandler}/>
                        </div>
                        {form}
                    </div>
                </CustomDrawer>
            );
        } else {
            return (
                <CustomModal className="FeedbackForm-root FeedbackForm-modal" open={this.props.open}
                             onClose={modalCloseHandler}>
                    {form}
                </CustomModal>
            );
        }
    }
}

export default FeedbackForm;
