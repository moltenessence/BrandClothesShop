import React, {FC} from 'react';
import {Card, Carousel} from "antd";
import {Photo} from "../../../../../Store/Reducers/showcaseReducer/types/reducerTypes";


interface IItemSliderProps {
    photos: Photo[],
}

const ItemSlider: FC<IItemSliderProps> = ({photos}) => {
    return (
        <Carousel autoplay pauseOnDotsHover={true} style={{width: 300, height: 408}}>
            {
                photos.map(e =>
                    <Card
                        bordered={false}
                        style={{
                            width: 270,
                            height: 'content-fit',
                            border: 'none',
                            cursor: 'pointer'
                        }}
                    >
                        <div style={{
                            width: 'inherit',
                            height: 320,
                            backgroundSize: 'cover',
                            backgroundImage: `url(${e.url})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'top',
                        }}/>
                    </Card>
                )
            }
        </Carousel>
    );
}

export default ItemSlider;