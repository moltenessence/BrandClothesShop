import React, {FC} from 'react';
import styles from "../styles/styles.module.scss";
import {Typography} from "antd";
import {ICartItem} from "../../../../Store/Reducers/cartReducer/types/reducerTypes";
import {CloseOutlined} from "@ant-design/icons";
import {useDispatch} from "react-redux";
import {removeCartItem} from "../../../../Store/Reducers/cartReducer/actionCreators";

type IProps = Omit<ICartItem, 'userId'>

const {Title, Text} = Typography

const CartItem: FC<IProps> = ({photoUrl, price, size, name, itemId}) => {

    const dispatch = useDispatch();

    return (
        <div className={styles.cartItemContainer}>
            <div className={styles.photoContainer}>
                <img src={photoUrl}
                     alt="ordered item"/>
            </div>
            <Typography style={{fontSize: '.9em'}} className={styles.textBlock}>
                <Title style={{fontSize: '1.3em'}}>
                    You added:
                </Title>
                <div className={styles.cartItemDescription}>
                    <Text>
                        Model: {name}
                    </Text>
                    <Text className={styles.size}>
                        SIZE: {size}
                    </Text>
                    <Text>
                        Price: {price}€
                    </Text>
                </div>
            </Typography>
            <div className={styles.removeBtnContainer}>
                <CloseOutlined className={styles.removeCartItem} onClick={() => dispatch(removeCartItem({itemId}))}/>
            </div>
        </div>
    );
}

export default CartItem;