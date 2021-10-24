import React, { Suspense } from "react";
import 'antd/dist/antd.css';
import styles from './style/styles.module.scss';
import Preloader from "../Common/Components/Preloader/Preloader";
import useShowcase from "./hooks/useShowcase";

const ItemCollection = React.lazy(() => import('./ItemCollection'));

const Showcase = () => {

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


export default Showcase;
