import {useState} from "react";
import 'antd/dist/antd.css';
import './style/style.scss';
import {Card, Carousel, Image, Modal, Typography} from "antd";
import Meta from "antd/lib/card/Meta";
import {Photo} from "../../../Store/Reducers/showcaseReducer/types/reducerTypes";

const {Title, Paragraph, Text} = Typography;

interface IProps {
    photos: Photo[],
    modelName: string,
    brand: string,
    description: string,
    size: string,
    price: number,
}

const Item = ({photos, modelName, price, description, size, brand}: IProps) => {
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
                visible={isVisible}
                width={'70vw'}
                onCancel={handleClose}
                footer={null}
            >
                <div style={{display: 'flex', margin: '20px 0'}}>
                    {
                        photos.length > 1 ?
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
                            :
                            <div style={{width: 300, height: 408}}>
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
                    }
                    <Typography style={{marginLeft: 25}}>
                        <Title style={{marginBottom: '.3em'}}>{modelName}</Title>
                        <Text strong={true}
                              style={{marginBottom: 15, display: 'block', fontSize: '1.5em'}}>{brand}</Text>
                        <Text strong={true}
                              style={{marginBottom: 10, display: 'block', fontSize: '1.5em'}}>Description</Text>
                        <Paragraph style={{fontSize: '1.2em'}}>{description}</Paragraph>
                    </Typography>
                </div>
            </Modal>
            <div
                className={'itemCardWrapper'}
            >
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
            </div>
        </>
    );
}

export default Item;