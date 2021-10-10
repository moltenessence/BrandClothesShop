import React, { useEffect, useState } from "react";
import LoginForm from "../LoginForm";
import { Modal } from "antd";

export default () => {

    let isVisible = false;

    const toggleVisibleMode = () => isVisible = !isVisible;

    const LoginModal = () => {

        const [isLoginVisible, setLoginVisible] = useState(isVisible);

        useEffect(() => {
            setLoginVisible(isVisible);
        }, [isVisible]);

        return (
            <Modal
                centered={true}
                title={'Login'}
                visible={isLoginVisible}
                onCancel={() => setLoginVisible(false)}
                footer={null}
            >
                <LoginForm />
            </Modal>
        );
    }


    return [
        LoginModal,
        toggleVisibleMode
    ];
}