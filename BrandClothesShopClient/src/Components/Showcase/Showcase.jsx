import React from "react";
import 'antd/dist/antd.css';
import styles from './style/styles.module.scss';

const Showcase = (props) => {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.item}>I T E M</div>
                <div className={styles.item}>I T E M</div>
                <div className={styles.item}>I T E M</div>
                <div className={styles.item}>I T E M</div>
                <div className={styles.item}>I T E M</div>
                <div className={styles.item}>I T E M</div>
                <div className={styles.item}>I T E M</div>
                <div className={styles.item}>I T E M</div>
            </div>
        </>
    );
}

export default Showcase;
