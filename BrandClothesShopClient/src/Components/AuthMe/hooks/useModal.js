import React, { useEffect, useState } from "react";
import { Modal } from "antd";
import LoginForm from "../LoginForm/LoginForm";

export const useModal = () => {
    const [isLoginVisible, setLoginVisible] = useState(false);

    const handleOpen = () => {
        setLoginVisible(true);
    };

    const handleClose = () => {
        setLoginVisible(false);
    };

    const CustomModal = () => {
        return (
            <div>
                <Modal
                    centered={true}
                    title={"Login"}
                    visible={isLoginVisible}
                    onCancel={handleClose}
                    footer={null}
                >
                    <LoginForm />
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