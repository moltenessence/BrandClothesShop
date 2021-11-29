import React, {FC} from 'react';
import {Card, Carousel} from "antd";
import {Photo} from "../../../../../Store/Reducers/showcaseReducer/types/reducerTypes";
import styles from "./styles/styles.module.scss";


interface IItemSliderProps {
    photos: Photo[],
}

const ItemSlider: FC<IItemSliderProps> = ({photos}) => {
    return (
        <Carousel autoplay pauseOnDotsHover={true} className={styles.carousel}>
            {
                photos.map(e =>
                    <Card
                        bordered={false}
                        className={styles.carouselItem}
                    >
                        <div
                            className={styles.carouselPhoto}
                            style={{backgroundImage: `url(${e.url})`,}}
                        />
                    </Card>
                )
            }
        </Carousel>
    );
}

export default ItemSlider;