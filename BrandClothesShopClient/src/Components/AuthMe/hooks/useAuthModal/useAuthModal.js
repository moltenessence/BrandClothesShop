import React, { useState } from "react";
import { Modal } from "antd";
import "./style/style.scss";
import LoginForm from "../../LoginForm/LoginForm";
import RegForm from '../../RegistrationForm/RegForm';
import { connect, useDispatch } from "react-redux";
import { setServerError } from "../../../../Store/Reducers/authMeReducer/actionCreators";

export const useAuthModal = () => {

    const dispatch = useDispatch()
    const [isLoginVisible, setLoginVisible] = useState(false);

    const handleOpen = () => {
        setLoginVisible(true);
    };

    const handleClose = () => {
        setLoginVisible(false);
        dispatch(setServerError(null));
    };

    const CustomModal = ({ error }) => {

        const [isRegistered, setIsRegistered] = useState(true);

        return (
            <Modal
                className="authModal"
                centered={true}
                title={isRegistered ? 'Login' : 'Registration'}
                visible={isLoginVisible}
                onCancel={handleClose}
                footer={null}
            >
                <div className="authModalBody">
                    {
                        isRegistered ?
                            <LoginForm />
                            :
                            <RegForm />
                    }
                    {
                        error ?
                            <span
                                className='serverError'>{error}
                            </span> : ''
                    }
                    <span
                        style={{ cursor: 'pointer', marginTop: 20, display: 'block' }}
                        onClick={() => setIsRegistered(!isRegistered)}
                    >
                        {isRegistered ? 'Create new account' : 'Sign In'}
                    </span>
                </div>
            </Modal>
        );
    };

    const mapStateToProps = (state) => {
        return {
            error: state.authMe.serverError,
        }
    }

    const Component = connect(mapStateToProps)(CustomModal)

    return {
        ModalComponent: Component,
        modalClose: handleClose,
        modalOpen: handleOpen
    };
};