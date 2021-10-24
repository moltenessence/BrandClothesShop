import React, { Suspense } from "react";
import 'antd/dist/antd.css';
import styles from './style/styles.module.scss';
import Item from "./Item/Item";
import { connect } from "react-redux";
import Preloader from "../Common/Components/Preloader/Preloader";
import useShowcase from "./hooks/useShowcase";

const ItemCollection = React.lazy(() => import('./ItemCollection'));

const Showcase = ({ itemsCollection, isFetching }) => {

    const [isVisible] = useShowcase()

    return (
        isVisible ?
            <div className={styles.showcaseWrapper}>
                <Suspense fallback={<Preloader />}>
                    <ItemCollection />
                </Suspense>
            </div> : null
    );
}

const mapStateToProps = (state) => {
    return {
        itemsCollection: state.showcase.itemsCollection,
        isFetching: state.showcase.isFetching,
    }
}

export default connect(mapStateToProps)(Showcase);
