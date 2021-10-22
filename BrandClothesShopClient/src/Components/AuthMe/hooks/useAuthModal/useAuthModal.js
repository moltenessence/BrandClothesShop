import React, { useState } from "react";
import { Modal } from "antd";
import "./style/style.scss";
import LoginForm from "../../LoginForm/LoginForm";
import RegForm from '../../RegistrationForm/RegForm';

export const useAuthModal = () => {
    const [isLoginVisible, setLoginVisible] = useState(false);

    const handleOpen = () => {
        setLoginVisible(true);
    };

    const handleClose = () => {
        setLoginVisible(false);
    };

    const CustomModal = () => {

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

    return {
        ModalComponent: CustomModal,
        modalClose: handleClose,
        modalOpen: handleOpen
    };
};