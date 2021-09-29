import React, { useEffect, useState } from "react";
import 'antd/dist/antd.css';
import styles from './style/styles.module.scss';
import { useParams } from "react-router";
import Item from "./Item/Item";

const Showcase = (props) => {

    const [isVisible, toggleVisibleMode] = useState(false);
    const params = useParams().params;

    useEffect(() => {
        params ? toggleVisibleMode(true) : toggleVisibleMode(false);
    });

    return (
        <>
            {
                isVisible ? <div className={styles.wrapper}>
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                </div> : null
            }
        </>
    );
}

export default Showcase;
