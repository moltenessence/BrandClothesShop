import React, { useEffect } from "react";
import 'antd/dist/antd.css';
import './style/style.scss';
import { Card } from "antd";
import Meta from "antd/lib/card/Meta";


const Item = (props) => {

    const { photoUrl, modelName, price } = props;

    return (
        <>
            <div className={'itemCardWrapper'}>
                <Card
                    style={{ width: 270, height: 'content-fit', border: 'none' }}
                    hoverable={true}
                    cover={
                        <div style={{
                            width: 'inherit',
                            height: 320,
                            backgroundSize: 'cover',
                            backgroundImage: `url(${photoUrl})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'top',
                        }} />
                    }
                >
                    <Meta
                        title={`${modelName}`}
                        description={`€${price}`}
                    />
                </Card>
            </div>
        </>
    );
}

export default Item;