import React, { useState } from "react";
import 'antd/dist/antd.css';
import './style/style.scss';
import { Card, Modal } from "antd";
import Meta from "antd/lib/card/Meta";


const Item = ({ photos, modelName, price, ...props }) => {

    const [isVisible, setIsVisible] = useState();

    const handleOpen = () => {
        setIsVisible(true);
    };

    const handleClose = () => {
        setIsVisible(false);
    };

    return (
        <>
            <Modal
                centered={true}
                title={'sdfasfgsfdg'}
                visible={isVisible}
                onCancel={handleClose}
                footer={null}
            >
                <p>{props.brand}</p>
                <p>{props.size}</p>
                <p>{props.type}</p>
            </Modal>
            <div
                className={'itemCardWrapper'}
                onClick={handleOpen}
            >
                <Card
                    style={{ width: 270, height: 'content-fit', border: 'none' }}
                    hoverable={true}
                    cover={
                        <div style={{
                            width: 'inherit',
                            height: 320,
                            backgroundSize: 'cover',
                            backgroundImage: `url(${photos[0].url})`,
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