import React from "react";
import 'antd/dist/antd.css';
// import styles from './style/styles.module.scss';
import { Card } from "antd";
import Meta from "antd/lib/card/Meta";

const Item = (props) => {

    return (
        <>
            <Card
                style={{ width: 270, height: 450, border: 'none' }}
                hoverable={true}
                cover={
                    <div style={{
                        width: 'inherit',
                        height: 320,
                        backgroundSize: 'cover',
                        backgroundImage: 'url(https://sun9-54.userapi.com/impg/47ebFoGgwl-t47Fb0IZcwK6SQCciJmmqL3Akfw/U7Hr7imAMTc.jpg?size=800x1200&quality=96&sign=ba772cac34c531233c7fdbca2621888c&type=album)',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'top',
                    }} />
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
