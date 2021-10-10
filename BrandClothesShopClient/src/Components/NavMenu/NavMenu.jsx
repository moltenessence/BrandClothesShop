import React, { useEffect, useState } from "react";
import { Menu, Modal, Form, Input, Button } from "antd";
import './style/style.scss';
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import LoginForm from "./LoginForm/LoginForm";
// import useLoginModal from "./LoginForm/hooks/useLoginModal";

const NavMenu = (props) => {
    const params = useParams();
    const [darkMode, toggleMode] = useState(true);
    const [isLoginVisible, setLoginVisible] = useState(false);

    useEffect(() => {
        params.params ? toggleMode(true) : toggleMode(false);
    });

    // const [LoginModal, toggleVisibleMode] = useLoginModal();

    return (
        <>
            <Modal
                centered={true}
                title={'Login'}
                visible={isLoginVisible}
                onCancel={() => setLoginVisible(false)}
                footer={null}
            >
                <LoginForm />
            </Modal>
            {/* <LoginModal /> */}
            <div className={darkMode ? 'navMenuWrapperDark' : 'navMenuWrapperLight'}>
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
                    <Menu.Item className={'loginItem'} onClick={() => setLoginVisible(true)}>
                        <span className='navLink'>Login</span>
                    </Menu.Item>
                </Menu>
            </div>
        </>
    );
}

export default NavMenu;