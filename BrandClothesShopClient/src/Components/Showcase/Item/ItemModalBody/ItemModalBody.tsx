import React, {FC, useState} from 'react';
import {Modal, Select, Typography} from "antd";
import {connect, ConnectedProps, useDispatch} from "react-redux";
import {order} from "../../../../Store/Reducers/showcaseReducer/actionCreators";
import {Item as IItem} from "./../../../../Store/Reducers/showcaseReducer/types/reducerTypes";
import {RootState} from "../../../../Store/store";
import ItemSlider from "./ItemSlider/ItemSlider";
import SinglePhoto from "./SinglePhoto/SinglePhoto";
import ToolBar from "./ToolBar/ToolBar";
import styles from "./styles/styles.module.scss";


interface IProps extends IItem, ConnectorProps {
    userId: number | null,
    isAuth: boolean,
    orderError: boolean,
    orderSuccess: boolean,
}

const {Title, Text, Paragraph} = Typography;
const {Option} = Select;

const ItemModalBody: FC<IProps> = ({
                                       photos,
                                       modelName,
                                       description,
                                       brand,
                                       size,
                                       price,
                                       userId,
                                       clothesItemId,
                                       orderSuccess,
                                       orderError,
                                       isAuth
                                   }) => {

    const [selectedSize, setSelectedSize] = useState('');

    const handleSelect = (value: string) => setSelectedSize(value);

    const dispatch = useDispatch();

    const handleOrder = () => {
        dispatch(order({UserId: userId, ItemId: clothesItemId, Size: selectedSize}));
    }

    return (
        <>
            <div className={styles.mainContainer}>
                <Modal
                    visible={orderSuccess || orderError}
                    closable={false}
                    bodyStyle={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
                    footer={null}
                >
                     <span style={{
                         fontSize: '1.3em',
                         color: orderError ? 'red' : 'green',
                     }}>
                        {
                            orderError ? 'Some error occurred...' : 'Success!'
                        }
                     </span>
                </Modal>
                {
                    photos.length > 1 ?
                        <ItemSlider photos={photos}/>
                        :
                        <SinglePhoto photos={photos}/>
                }
                <Typography className={styles.mainTypography}>
                    <Title className={styles.title}>{modelName}</Title>
                    <Text strong={true}
                          className={styles.brandName}>{brand}</Text>
                    <Select
                        showSearch
                        className={styles.selectSizeInput}
                        placeholder="Size"
                        onSelect={handleSelect}
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                            option!.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        {
                            size.split(' ').map(size => <Option value={size}>{size}</Option>)
                        }
                    </Select>
                    <Text strong={true}
                          className={styles.descriptionText}
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
                          className={styles.price}
                    >
                        €{price}
                    </Text>
                </Typography>
            </div>
            <ToolBar
                handleOrder={handleOrder}
                orderError={orderError}
                orderSuccess={orderSuccess}
                isAuth={isAuth}
            />
        </>
    );
}


const mapStateToProps = (state: RootState) => ({isAuth: state.authMe.isAuth});

const connector = connect(mapStateToProps);

type ConnectorProps = ConnectedProps<typeof connector>;

export default connector(ItemModalBody);