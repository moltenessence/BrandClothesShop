import React, {FC} from 'react';
import {Button, Tooltip} from "antd";
import styles from "./styles/styles.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {IItemToAdd} from "../../../../../Store/Reducers/homePageReducer/types/actionPayloadTypes";
import {RootState} from "../../../../../Store/store";
import {addItemToCart} from "../../../../../Store/Reducers/cartReducer/actionCreators";


interface IProps {
    handleOrder: () => void,
    orderError: boolean,
    orderSuccess: boolean,
    isAuth: boolean,
    itemId: number,
    size: string
}

const ToolBar: FC<IProps> = ({
                                 handleOrder,
                                 orderSuccess,
                                 isAuth,
                                 orderError,
                                 itemId,
                                 size
                             }) => {

    const dispatch = useDispatch();
    const userId = useSelector((state: RootState) => state.authMe.userId);
    console.log(userId)

    const itemInfo: IItemToAdd = {
        userId,
        itemId,
        size,
    }

    console.log(itemInfo)

    return (
        <div className={styles.toolbarContainer}>
            <Tooltip placement="top" mouseEnterDelay={1} title={'You must be logged in to make purchases'}>
                <Button onClick={handleOrder}
                        danger={orderSuccess}
                        disabled={!isAuth}
                        className={`${orderError ? ' orderError ' : ''}` + styles.orderBtn}
                >
                    Order
                </Button>
            </Tooltip>
            <Button
                onClick={() => dispatch(addItemToCart(itemInfo))}
                className={styles.addToCartBtn}
            >
                Add to cart
            </Button>
        </div>
    );
}

export default ToolBar;