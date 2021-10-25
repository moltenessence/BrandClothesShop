import { useState } from "react";
import 'antd/dist/antd.css';
import './style/style.scss';
import { Card, Modal } from "antd";
import Meta from "antd/lib/card/Meta";
import { Photo } from "../../../Store/Reducers/showcaseReducer/showcaseReducer";

interface IProps {
    photos: Photo[],
    modelName: string,
    price: number,
}

const Item = ({ photos, modelName, price, ...props }: IProps) => {

    const [isVisible, setIsVisible] = useState<boolean>();

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
                <p>afddsfdsafd</p>
                <p>adsfdfasd</p>
                <p>asdfaddaf</p>
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