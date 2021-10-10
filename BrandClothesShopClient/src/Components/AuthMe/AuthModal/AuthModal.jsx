import { Modal } from "antd";
import LoginForm from "../LoginForm/LoginForm";
import RegForm from "../RegistrationForm/RegForm";
import useAuth from "../hooks/useAuth";

export default ({ registered = true, authDisplay }) => {

    const { isAuthVisible, setAuthVisible, isRegistered, setIsRegistered } = useAuth(registered, authDisplay);

    return (
        <Modal
            centered={true}
            title={isRegistered ? 'Login' : 'Registration'}
            visible={isAuthVisible}
            onCancel={() => setAuthVisible(false)}
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
    );
}