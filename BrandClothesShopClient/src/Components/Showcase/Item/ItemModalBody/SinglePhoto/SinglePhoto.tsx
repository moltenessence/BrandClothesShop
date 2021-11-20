import React from 'react';
import {Card} from "antd";
import {Photo} from "../../../../../Store/Reducers/showcaseReducer/types/reducerTypes";


interface ISinglePhotoProps {
    photos: Photo[],
}

const SinglePhoto = <T extends ISinglePhotoProps>({photos}: T) => {
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