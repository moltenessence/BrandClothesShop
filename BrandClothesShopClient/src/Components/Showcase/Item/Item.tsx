import React, {FC, useState} from "react";
import 'antd/dist/antd.css';
import './style/style.scss';
import {Modal} from "antd";
import {Item as IItem} from "./../../../Store/Reducers/showcaseReducer/types/reducerTypes";
import ItemCard from "./ItemCard/ItemCard";
import ItemModalBody from "./ItemModalBody/ItemModalBody";

interface IProps extends IItem {
    userId: number | null
    orderError: boolean,
    orderSuccess: boolean,
}

const Item: FC<IProps> = ({
                              photos,
                              modelName,
                              price,
                              description,
                              userId,
                              size,
                              brand,
                              clothesItemId,
                              orderError,
                              orderSuccess,
                              type,
                          }) => {
    const [isVisible, setIsVisible] = useState(false);

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
                visible={isVisible}
                width={'60vw'}
                onCancel={handleClose}
                footer={null}
            >
                <ItemModalBody userId={userId} orderError={orderError} orderSuccess={orderSuccess}
                               clothesItemId={clothesItemId} modelName={modelName} brand={brand}
                               type={type} size={size} description={description} price={price} photos={photos}
                />
            </Modal>
            <div
                className={'itemCardWrapper'}
            >
                <ItemCard
                    handleOpen={handleOpen}
                    photos={photos}
                    modelName={modelName}
                    price={price}
                />
            </div>
        </>
    );
}

export default Item;