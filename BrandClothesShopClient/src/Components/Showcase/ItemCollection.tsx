import React from "react";
import 'antd/dist/antd.css';
import Item from "./Item/Item";
import {connect, ConnectedProps} from "react-redux";
import {RootState} from "../../Store/store";

interface IProps extends ConnectorProps {
}

const ItemsCollectionComponent = ({itemsCollection, userId, isAuth, orderError, orderSuccess}: IProps) => {
    return (
        <>
            {
                itemsCollection.map((item, index) => <Item
                    {...item}
                    userId={userId}
                    isAuth={isAuth}
                    orderSuccess={orderSuccess}
                    orderError={orderError}
                    key={index}
                />)
            }
        </>
    );
}

const mapStateToProps = (state: RootState) => {
    return {
        userId: state.authMe.userId,
        itemsCollection: state.showcase.itemsCollection,
        isFetching: state.showcase.isFetching,
        isAuth: state.authMe.isAuth,
        orderSuccess: state.showcase.orderSuccess,
        orderError: state.showcase.orderError,
    }
}

const connector = connect(mapStateToProps);

type ConnectorProps = ConnectedProps<typeof connector>

export default connector(ItemsCollectionComponent);
