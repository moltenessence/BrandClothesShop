import React from "react";
import 'antd/dist/antd.css';
import Item from "./Item/Item";
import { connect, ConnectedProps } from "react-redux";
import ItemsCollection from './ItemCollection';
import { RootState } from "../../Store/store";

interface IProps extends ConnectorProps { }

const ItemsCollectionComponent = ({ itemsCollection }: IProps) => {
    return (
        <>
            {
                itemsCollection.map((item, index) => <Item
                    {...item}
                    key={index}
                />)
            }
        </>
    );
}

const mapStateToProps = (state: RootState) => {
    return {
        itemsCollection: state.showcase.itemsCollection,
        isFetching: state.showcase.isFetching,
    }
}

const connector = connect(mapStateToProps);

type ConnectorProps = ConnectedProps<typeof connector>

export default connector(ItemsCollectionComponent);
