import React, { useState } from "react";
import { Modal } from "antd";
import LoginForm from "../LoginForm/LoginForm";
import RegForm from '../RegistrationForm/RegForm';

export const useModal = () => {
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
            <div>
                <Modal
                    centered={true}
                    title={isRegistered ? 'Login' : 'Registration'}
                    visible={isLoginVisible}
                    onCancel={handleClose}
                    footer={null}
                >
                    {
                        isRegistered ?
                            <LoginForm />
                            :
                            <RegForm />
                    }
                    <span
                        style={{ cursor: 'pointer' }}
                        onClick={() => setIsRegistered(!isRegistered)}
                    >
                        {isRegistered ? 'Create new account' : 'Sign In'}
                    </span>
                </Modal>
            </div>
        );
    };

    return {
        ModalComponent: CustomModal,
        modalClose: handleClose,
        modalOpen: handleOpen
    };
};