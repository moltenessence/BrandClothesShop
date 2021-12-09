import {Menu, Modal, Typography} from 'antd';
import {connect, ConnectedProps, useDispatch} from 'react-redux';
import {RootState} from '../../../../Store/store';
import {logout} from '../../../../Store/Reducers/authMeReducer/actionCreators';
import {FC, useState} from "react";
import styles from './styles/styles.module.scss';
import Title from "antd/es/typography/Title";

interface IProps extends ConnectorProps {
}

const AuthedItems: FC<IProps> = ({userName}) => {

    const dispatch = useDispatch();
    const [isModalVisible, setIsModalVisible] = useState(false);

    const modalOpen = () => setIsModalVisible(true);
    const modalClose = () => setIsModalVisible(false);

    return (
        <>
            <Modal
                visible={isModalVisible}
                onCancel={modalClose}
                className={styles.profileModal}
                footer={null}
            >
                <div className={styles.contentHolder}>
                    <div className={styles.userMenu}>
                        <div className={styles.avatarContainer}>
                            <img
                                className={styles.avatar}
                                src="https://sun9-26.userapi.com/impg/aXt0dQVUhrPkr2MVa2DBAHA6DOKyUsdlzVUXUw/SuBcQqMhh3I.jpg?size=980x981&quality=96&sign=c696712886e7b2ba8243dd5445cae4c5&type=album"
                                alt="avatar"/>
                        </div>
                        <Typography className={styles.userName}>
                            <Title>
                                {userName}
                            </Title>
                        </Typography>
                    </div>
                    <div className={styles.cart}>
                        <div className={styles.itemCard}>
                            <div className={styles.itemImg}>
                                <img
                                    src="http://cdn.shopify.com/s/files/1/0011/4651/9637/products/blue2_1000x_074c70e2-fccb-4ea1-84ef-5535303c1927_grande.png?v=1637805095"
                                    alt=""/>
                            </div>
                            <div className={styles.description}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A beatae corporis, cum cumque
                                dignissimos eum ex maxime molestiae mollitia nam natus nobis possimus provident quas
                                quos, reiciendis similique tempore, voluptatibus.
                            </div>
                        </div>
                    </div>
                </div>
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