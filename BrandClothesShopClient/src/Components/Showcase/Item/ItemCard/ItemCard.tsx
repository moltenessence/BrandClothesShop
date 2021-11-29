import React, {FC} from 'react';
import Meta from "antd/lib/card/Meta";
import {Card} from "antd";
import {Photo} from "../../../../Store/Reducers/showcaseReducer/types/reducerTypes";
import styles from "./styles/styles.module.scss";


interface IProps {
    handleOpen: () => void,
    photos: Photo[],
    modelName: string,
    price: number,
}

const ItemCard: FC<IProps> = ({handleOpen, photos, modelName, price}) => {
    return (
        <Card
            onClick={handleOpen}
            className={styles.card}
            cover={
                <div
                    className={styles.photo}
                    style={{backgroundImage: `url(${photos[0].url})`,}}
                />
            }
        >
            <Meta
                title={`${modelName}`}
                description={`€${price}`}
            />
        </Card>
    );
}

export default ItemCard;