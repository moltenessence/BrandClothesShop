import React, {FC} from 'react';
import {Button, Tooltip} from "antd";
import styles from "./styles/styles.module.scss";


interface IProps {
    handleOrder: () => void,
    orderError: boolean,
    orderSuccess: boolean,
    isAuth: boolean,
}

const ToolBar: FC<IProps> = ({
                                 handleOrder,
                                 orderSuccess,
                                 isAuth,
                                 orderError,
                             }) => {
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
            <Button className={styles.addToCartBtn}>Add to cart</Button>
        </div>
    );
}

export default ToolBar;