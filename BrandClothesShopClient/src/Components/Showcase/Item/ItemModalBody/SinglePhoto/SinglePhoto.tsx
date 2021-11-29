import React, {FC} from 'react';
import {Card} from "antd";
import {Photo} from "../../../../../Store/Reducers/showcaseReducer/types/reducerTypes";


interface IProps {
    photos: Photo[],
}

const SinglePhoto: FC<IProps> = ({photos}) => {
    return (
        <div style={{width: 300, height: 350}}>
            <Card
                style={{width: 270, height: 'content-fit', border: 'none', cursor: 'pointer'}}
            >
                <div style={{
                    width: 'inherit',
                    height: 320,
                    backgroundSize: 'cover',
                    backgroundImage: `url(${photos[0].url})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'top',
                }}/>
            </Card>
        </div>
    );
}

export default SinglePhoto;