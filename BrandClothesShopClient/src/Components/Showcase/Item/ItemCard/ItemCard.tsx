import React, {FC} from 'react';
import Meta from "antd/lib/card/Meta";
import {Card} from "antd";
import {Photo} from "../../../../Store/Reducers/showcaseReducer/types/reducerTypes";


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
            style={{width: 270, height: 'content-fit', border: 'none', cursor: 'pointer'}}
            cover={
                <div style={{
                    width: 'inherit',
                    height: 320,
                    backgroundSize: 'cover',
                    backgroundImage: `url(${photos[0].url})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'top',
                }}/>
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