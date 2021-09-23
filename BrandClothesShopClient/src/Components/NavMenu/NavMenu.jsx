import React, { useEffect, useState } from "react";
import { Menu } from "antd";
import './style/style.scss';
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";

const NavMenu = (props) => {
    const params = useParams();
    const [darkMode, toggleMode] = useState(true);

    useEffect(() => {
        params.params ? toggleMode(true) : toggleMode(false);
    });

    return (
        <>
            <div className={darkMode ? 'navMenuWrapperDark' : 'navMenuWrapperLight'}>
                <Menu mode={'vertical'}>
                    <Menu.Item key='none'>
                        <NavLink to='/'>Home page</NavLink>
                    </Menu.Item>
                    <Menu.Item key='none-2'>
                        <NavLink to='/ertg'>Men</NavLink>
                    </Menu.Item>
                    <Menu.Item key='none-3'>
                        <NavLink to='/ertg'>Women</NavLink>
                    </Menu.Item>
                    <Menu.Item key='none-4'>
                        <NavLink to='/ertg'>Cart</NavLink>
                    </Menu.Item>
                </Menu>
            </div>
        </>
    );
}

export default NavMenu;