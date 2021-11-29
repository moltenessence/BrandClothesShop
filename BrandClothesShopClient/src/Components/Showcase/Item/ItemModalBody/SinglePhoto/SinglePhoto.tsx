import React, {FC} from 'react';
import {Card} from "antd";
import {Photo} from "../../../../../Store/Reducers/showcaseReducer/types/reducerTypes";
import styles from "./styles/styles.module.scss";


interface IProps {
    photos: Photo[],
}

const SinglePhoto: FC<IProps> = ({photos}) => {
    return (
        <div className={styles.photoContainer}>
            <Card
                className={styles.photoCard}
            >
                <div
                    className={styles.photoItem}
                    style={{backgroundImage: `url(${photos[0].url})`,}}
                />
            </Card>
        </div>
    );
}

export default SinglePhoto;