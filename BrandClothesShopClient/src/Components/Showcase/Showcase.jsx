import React, { useEffect, useState } from "react";
import 'antd/dist/antd.css';
import styles from './style/styles.module.scss';
import { useParams } from "react-router";
import Item from "./Item/Item";
import { setItemsCollection } from "../../Store/Reducers/showcaseReducer/showcaseReducer";
import { connect, useDispatch } from "react-redux";

const Showcase = (props) => {

    const dispatch = useDispatch();
    const [isVisible, toggleVisibleMode] = useState(false);
    const params = useParams().params;

    useEffect(() => {
        if (params) {
            dispatch(props.setItemsCollection({ itemType: params }));
            toggleVisibleMode(true);
        } else {
            toggleVisibleMode(false);
        }
    }, [params]);

    return (
        <>
            {
                isVisible ? <div className={styles.showcaseWrapper}>
                    {
                        props.itemsCollection.map((item, index) => <Item
                            modelName={item.modelName}
                            price={item.price}
                            photoUrl={item.photos[0].url}
                            key={index}
                        />)
                    }
                </div> : null
            }
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        itemsCollection: state.showcase.itemsCollection,
    }
}

export default connect(mapStateToProps, { setItemsCollection })(Showcase);
