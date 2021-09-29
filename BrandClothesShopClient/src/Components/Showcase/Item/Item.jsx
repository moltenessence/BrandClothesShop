import React from "react";
import 'antd/dist/antd.css';
// import styles from './style/styles.module.scss';
import { Card } from "antd";
import Meta from "antd/lib/card/Meta";

const Item = (props) => {

    return (
        <>
            <Card
            style={{width: 250}}
                cover={
                    <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                }
            >
                <Meta
                    title="Рарный айтем"
                    description="Крутая курточка на мальчика: и летом хорошо и зимой тепло"
                />
            </Card>
        </>
    );
}

export default Item;
