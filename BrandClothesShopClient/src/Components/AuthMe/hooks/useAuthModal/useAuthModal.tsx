import React, { useState } from "react";
import { Modal } from "antd";
import "./style/style.scss";
import LoginForm from "../../LoginForm/LoginForm";
import RegForm from '../../RegistrationForm/RegForm';
import { connect, ConnectedProps, useDispatch } from "react-redux";
import { setServerError } from "../../../../Store/Reducers/authMeReducer/actionCreators";
import { RootState } from "../../../../Store/store";


export const useAuthModal = () => {

    interface IProps extends ConnerctorProps { }

    const dispatch = useDispatch()
    const [isLoginVisible, setLoginVisible] = useState(false);

    const handleOpen = () => {
        setLoginVisible(true);
    };

    const handleClose = () => {
        setLoginVisible(false);
        dispatch(setServerError({ message: '' }));
    };

    const CustomModal = ({ error }: IProps) => {

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

    const mapStateToProps = (state: RootState) => {
        return {
            error: state.authMe.serverError,
        }
    }

    const connector = connect(mapStateToProps);

    type ConnerctorProps = ConnectedProps<typeof connector>;

    const Component = connector(CustomModal)

    return {
        ModalComponent: Component,
        modalClose: handleClose,
        modalOpen: handleOpen
    };
};