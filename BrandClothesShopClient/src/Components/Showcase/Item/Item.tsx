import {useState} from "react";
import 'antd/dist/antd.css';
import './style/style.scss';
import {Card, Carousel, Select, Modal, Typography, Button} from "antd";
import {Item as IItem} from "./../../../Store/Reducers/showcaseReducer/types/reducerTypes";
import Meta from "antd/lib/card/Meta";
import OrderService from "../../../Service/OrderService";

const {Title, Paragraph, Text} = Typography;
const {Option} = Select;

interface IProps extends IItem {
}

const Item = ({photos, modelName, price, description, size, brand, clothesItemId}: IProps) => {
    const [isVisible, setIsVisible] = useState<boolean>();

    const handleOpen = () => {
        setIsVisible(true);
    };

    const handleClose = () => {
        setIsVisible(false);
    };

    const handleOrder = () => {
        OrderService.Order(1033, clothesItemId, 'M').then(r => console.log(r));
    }

    const aaa = () => {
        OrderService.getOrders(1033);
    }

    return (
        <>
            <Modal
                centered={true}
                visible={isVisible}
                width={'60vw'}
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
                    }
                    <Typography style={{marginLeft: 25}}>
                        <Title style={{marginBottom: '.3em'}}>{modelName}</Title>
                        <Text strong={true}
                              style={{marginBottom: 15, display: 'block', fontSize: '1.5em'}}>{brand}</Text>
                        <Select
                            showSearch
                            style={{width: 100}}
                            placeholder="Size"
                            optionFilterProp="children"
                            filterOption={(input, option) =>
                                option!.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            <Option value="jack">S</Option>
                            <Option value="lucy">M</Option>
                            <Option value="tom">XL</Option>
                        </Select>
                        <Text strong={true}
                              style={{
                                  marginBottom: 10,
                                  marginTop: 10,
                                  display: 'block',
                                  fontSize: '1.5em'
                              }}
                        >
                            Description
                        </Text>
                        <Paragraph style={{fontSize: '1.2em'}}>
                            {description ? description : 'Lorem ipsum dolor sit amet, consectetur ' +
                                'adipisicing elit. Culpa cupiditate distinctio eius et ' +
                                'facere labore, neque nisi placeat. Aliquam dicta explicabo' +
                                ' itaque minima nesciunt non quae reprehenderit sit voluptate voluptatibus?'}
                        </Paragraph>
                        <Text strong={true}
                              style={{
                                  opacity: '.5',
                                  marginTop: 10,
                                  display: 'block',
                                  fontSize: '2em'
                              }}
                        >
                            €{price}
                        </Text>
                    </Typography>
                </div>
                <div style={{display: 'flex', justifyContent: 'end'}}>
                    <Button style={{height: 40, width: 90}} onClick={handleOrder}>Order</Button>
                    <Button style={{height: 40, width: 110, marginLeft: 10}} onClick={aaa}>Add to cart</Button>
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