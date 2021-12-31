import {Menu, Modal, Typography} from 'antd';
import {connect, ConnectedProps, useDispatch} from 'react-redux';
import {RootState} from '../../../../Store/store';
import {logout} from '../../../../Store/Reducers/authMeReducer/actionCreators';
import {FC, useEffect, useState} from "react";
import styles from './styles/styles.module.scss';
import Title from "antd/es/typography/Title";
import ProfileModalBody from "../../ProfileModalBody/ProfileModalBody";
import {NavLink} from "react-router-dom";
import Cart from "../../Cart/Cart";
import {getCartItems} from "../../../../Store/Reducers/cartReducer/actionCreators";

interface IProps extends ConnectorProps {
}

const AuthedItems: FC<IProps> = ({userName}) => {

    const dispatch = useDispatch();
    const [isModalVisible, setIsModalVisible] = useState(false);

    const modalOpen = () => setIsModalVisible(true);
    const modalClose = () => setIsModalVisible(false);


    const [isCartVisible, setIsCartVisible] = useState(false);

    const cartOpen = () => setIsCartVisible(true);
    const cartClose = () => setIsCartVisible(false);

    useEffect(() => {
            dispatch(getCartItems([]))
        },
        [isCartVisible]
    )

    return (
        <>
            <Modal
                visible={isCartVisible}
                onCancel={cartClose}
                bodyStyle={{display: 'flex', justifyContent: 'start', alignItems: 'center', flexDirection: 'column'}}
                footer={null}
            >
                <Cart/>
            </Modal>
            <Menu.Item key='cart' onClick={() => setIsCartVisible(true)}
            >
                <span
                    className='navLink'
                >
                    Cart
                </span>
            </Menu.Item>
            <Modal
                visible={isModalVisible}
                onCancel={modalClose}
                className={styles.profileModal}
                footer={null}
            >
                <ProfileModalBody/>
            </Modal>
            <Menu.Item className={'loginItem'} onClick={() => dispatch(logout(true))}>
                <span className='navLink'>Logout</span>
            </Menu.Item>
            <Menu.Item
                className={'helloItem'}
                onClick={modalOpen}
            >
                <span
                    className='navLink'
                >
                    Hello, <span className='username'>{userName ? userName : 'guest'}</span>
                </span>
            </Menu.Item>
        </>
    );
}

const mapStateToProps = (state: RootState) => {
    return {
        userName: state.authMe.userName,
    }
}

const connector = connect(mapStateToProps);

type ConnectorProps = ConnectedProps<typeof connector>

export default connector(AuthedItems);