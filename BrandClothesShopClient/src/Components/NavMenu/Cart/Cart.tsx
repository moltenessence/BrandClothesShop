import React, {useEffect} from 'react';
import styles from './styles/styles.module.scss'
import {Typography} from "antd";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {getCartItems} from "../../../Store/Reducers/cartReducer/actionCreators";
import {RootState} from "../../../Store/store";
import CartItem from "./CartItem/CartItem";

const {Title, Text} = Typography

const Cart = () => {

    const itemCollection = useSelector((state: RootState) => state.cart.itemCollection, shallowEqual);
    console.log(itemCollection)

    return (
        <>
            <div>
                <Typography>
                    <Title>
                        Cart
                    </Title>
                </Typography>
            </div>
            <div className={styles.cartItemCollection}>
                {
                    console.log(itemCollection.length)
                }
                {
                    itemCollection.length === 0 ? <span>Your cart is empty :('</span> :
                        itemCollection.map((item, index) => <CartItem
                            key={`Cart_` + index}
                            name={item.name}
                            itemId={item.itemId}
                            size={item.size}
                            price={item.price}
                            photoUrl={item.photoUrl}
                        />)
                }
            </div>
        </>
    );
}

export default Cart;