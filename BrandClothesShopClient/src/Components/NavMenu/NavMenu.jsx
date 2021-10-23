import React, { useEffect, useState } from "react";
import { Menu } from "antd";
import './style/style.scss';
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import { useAuthModal } from "../AuthMe/hooks/useAuthModal/useAuthModal";

const NavMenu = (props) => {
    const urlParams = useParams().params;
    const [darkMode, toggleMode] = useState(true);
    const { ModalComponent, modalOpen } = useAuthModal();

    useEffect(() => {
        urlParams ? toggleMode(true) : toggleMode(false);
    }, [urlParams]);

    return (
        <>
            <ModalComponent />

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
                    <Menu.Item className={'loginItem'} onClick={() => modalOpen()}>
                        <span className='navLink'>Login</span>
                    </Menu.Item>
                </Menu>
            </div>
        </>
    );
}

export default NavMenu;