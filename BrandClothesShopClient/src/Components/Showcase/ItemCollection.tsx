import React from "react";
import 'antd/dist/antd.css';
import Item from "./Item/Item";
import {connect, ConnectedProps} from "react-redux";
import {RootState} from "../../Store/store";

interface IProps extends ConnectorProps {
}

const ItemsCollectionComponent = ({itemsCollection, userId}: IProps) => {
    return (
        <>
            {
                itemsCollection.map((item, index) => <Item
                    {...item}
                    userId={userId}
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
    }
}

const connector = connect(mapStateToProps);

type ConnectorProps = ConnectedProps<typeof connector>

export default connector(ItemsCollectionComponent);
