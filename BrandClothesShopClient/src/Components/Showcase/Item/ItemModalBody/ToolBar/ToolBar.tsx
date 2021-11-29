import React, {FC} from 'react';
import {Button, Tooltip} from "antd";


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
        <div style={{display: 'flex', justifyContent: 'end'}}>
            <Tooltip placement="top" mouseEnterDelay={1} title={'You must be logged in to make purchases'}>
                <Button style={{height: 40, width: 90}} onClick={handleOrder}
                        danger={orderSuccess}
                        disabled={!isAuth}
                        className={orderError ? 'orderError' : ''}
                >
                    Order
                </Button>
            </Tooltip>
            <Button style={{height: 40, width: 110, marginLeft: 10}}>Add to cart</Button>
        </div>
    );
}

export default ToolBar;