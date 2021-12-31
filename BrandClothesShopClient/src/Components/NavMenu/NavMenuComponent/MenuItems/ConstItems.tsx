import { Menu } from "antd";
import { NavLink } from 'react-router-dom';


export default () => {
    return (
        <>
            <Menu.Item key={'HomePage'}>
                <NavLink to='/' className='navLink'>Home page</NavLink>
            </Menu.Item>
            <Menu.Item key='t-shirts'>
                <NavLink to='/t-shirt' className='navLink'>T-shirts</NavLink>
            </Menu.Item>
            <Menu.Item key='hoodies'>
                <NavLink to='/hoodie' className='navLink'>Hoodies</NavLink>
            </Menu.Item>
            <Menu.Item key='pants'>
                <NavLink to='/pants' className='navLink'>Pants</NavLink>
            </Menu.Item>
            <Menu.Item key='shoes'>
                <NavLink to='/shoes' className='navLink'>Shoes</NavLink>
            </Menu.Item>
        </>
    );
}