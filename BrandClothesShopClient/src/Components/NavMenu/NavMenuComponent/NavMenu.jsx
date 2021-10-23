import React from "react";
import { Menu } from "antd";
import './../style/style.scss';
import { NavLink } from "react-router-dom";
import useNavMenu from "../hooks/useNavMenu";
import { connect, useDispatch } from "react-redux";
import { logout } from "../../../Store/Reducers/authMeReducer/actionCreators";


const NavMenu = ({ modalOpen, userName, isAuth }) => {

    const [darkMode] = useNavMenu();
    const dispatch = useDispatch();

    return (
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
                {
                    isAuth ?
                        <>
                            <Menu.Item className={'loginItem'} onClick={() => dispatch(logout())}>
                                <span className='navLink'>Logout</span>
                            </Menu.Item>
                            <Menu.Item className={'helloItem'}>
                                <span className='navLink'>Hello, <span className='username'>{userName}</span></span>
                            </Menu.Item>
                        </>
                        :

                        <Menu.Item className={'loginItem'} onClick={() => modalOpen()}>
                            <span className='navLink'>Login</span>
                        </Menu.Item>
                }
            </Menu>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.authMe.isAuth,
        userName: state.authMe.userName,
    }
}

export default connect(mapStateToProps)(NavMenu);