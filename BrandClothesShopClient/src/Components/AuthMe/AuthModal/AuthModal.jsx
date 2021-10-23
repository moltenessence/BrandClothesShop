import { Modal } from "antd";
import LoginForm from "../LoginForm/LoginForm";
import RegForm from "../RegistrationForm/RegForm";
import useAuth from "../hooks/useAuth";
import { connect } from "react-redux";

const AuthModal = ({ registered = true, authDisplay, isAuth, modalClose }) => {

    const { isAuthVisible, setAuthVisible, isRegistered, setIsRegistered } = useAuth(registered, authDisplay);

    if (isAuth) modalClose();

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

const mapStateToProps = (state) => {
    return {
        isAuth: state.authMe.isAuth,
    }
}

export default connect(mapStateToProps)(AuthModal)