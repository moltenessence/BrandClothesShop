import { Menu } from "antd";
import { NavLink } from 'react-router-dom';


export default () => {
    return (
        <>
            <Menu.Item key='none'>
                <NavLink to='/' className='navLink'>Home page</NavLink>
            </Menu.Item>
            <Menu.Item key='none-2'>
                <NavLink to='/t-shirt' className='navLink'>T-shirts</NavLink>
            </Menu.Item>
            <Menu.Item key='none-3'>
                <NavLink to='/hoodie' className='navLink'>Hoodies</NavLink>
            </Menu.Item>
            <Menu.Item key='none-10'>
                <NavLink to='/pants' className='navLink'>Pants</NavLink>
            </Menu.Item>
            <Menu.Item key='none-20'>
                <NavLink to='/shoes' className='navLink'>Shoes</NavLink>
            </Menu.Item>
            <Menu.Item key='none-4'>
                <NavLink to='/cart' className='navLink'>Cart</NavLink>
            </Menu.Item>
        </>
    );
}