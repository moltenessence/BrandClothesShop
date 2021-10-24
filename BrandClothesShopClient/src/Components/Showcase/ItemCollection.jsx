import React from "react";
import 'antd/dist/antd.css';
import Item from "./Item/Item";
import { connect } from "react-redux";

const ItemsCollection = ({ itemsCollection }) => {
    return (
        <>
            {
                itemsCollection.map((item, index) => <Item
                    modelName={item.modelName}
                    price={item.price}
                    photoUrl={item.photos[0].url}
                    key={index}
                />)
            }
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        itemsCollection: state.showcase.itemsCollection,
        isFetching: state.showcase.isFetching,
    }
}

export default connect(mapStateToProps)(ItemsCollection);
