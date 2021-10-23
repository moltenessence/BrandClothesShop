import React from "react";
import 'antd/dist/antd.css';
import styles from './style/styles.module.scss';
import Item from "./Item/Item";
import { connect } from "react-redux";
import Preloader from "../Common/Components/Preloader/Preloader";
import useShowcase from "./hooks/useShowcase";

const Showcase = ({ itemsCollection, isFetching }) => {

    const [isVisible] = useShowcase()

    return isVisible ?
        <div className={styles.showcaseWrapper}>
            {
                isFetching ? <Preloader /> : itemsCollection.map((item, index) => <Item
                    modelName={item.modelName}
                    price={item.price}
                    photoUrl={item.photos[0].url}
                    key={index}
                />)
            }
        </div> : null

}

const mapStateToProps = (state) => {
    return {
        itemsCollection: state.showcase.itemsCollection,
        isFetching: state.showcase.isFetching,
    }
}

export default connect(mapStateToProps)(Showcase);
