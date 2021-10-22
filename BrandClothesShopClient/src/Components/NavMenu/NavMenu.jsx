import React, { useEffect, useState } from "react";
import { Menu, Modal } from "antd";
import styles from './style/style.module.scss';
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import useAuth from "../AuthMe/hooks/useAuth";
import LoginForm from "../AuthMe/LoginForm/LoginForm";
import RegForm from "../AuthMe/RegistrationForm/RegForm";
import { useAuthModal } from "../AuthMe/hooks/useAuthModal";

const NavMenu = (props) => {

    const urlParams = useParams().params;
    const [darkMode, toggleMode] = useState(true);
    // const { isAuthVisible, setAuthVisible, isRegistered, setIsRegistered } = useAuth();
    const { ModalComponent, modalOpen } = useAuthModal();

    useEffect(() => {
        urlParams ? toggleMode(true) : toggleMode(false);
    }, [urlParams]);

    return (
        <>
            <ModalComponent />
            {/* <Modal
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
            </Modal> */}

            <div className={darkMode ? styles.navMenuWrapperDark : styles.navMenuWrapperLight}>
                <Menu mode={'vertical'}>
                    <Menu.Item key='none'>
                        <NavLink to='/' className='navLink'>Home page</NavLink>
                    </Menu.Item>
                    <Menu.Item key='none-2'>
                        <NavLink to='/t-shirt' className='navLink'>T-shirts</NavLink>
                    </Menu.Item>
                    <Menu.Item key='none-3'>
                        <NavLink to='/hoodie' className='navLink'>Hoodies</NavLink>
                    </Menu.Item>
                    <Menu.Item key='none-4'>
                        <NavLink to='/cart' className='navLink'>Cart</NavLink>
                    </Menu.Item>
                    <Menu.Item className={styles.loginItem} onClick={() => modalOpen()}>
                        <span className='navLink'>Login</span>
                    </Menu.Item>
                </Menu>
            </div>
        </>
    );
}

export default NavMenu;