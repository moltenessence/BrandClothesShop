import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { setItemsCollection } from "../../../Store/Reducers/showcaseReducer/actionCreators";


export default () => {
    const dispatch = useDispatch();
    const urlTriggers = ['t-shirt', 'hoodie'];
    const [isVisible, toggleVisibleMode] = useState(false);
    const params = useParams().params;

    useEffect(() => {
        if (urlTriggers.some(item => item === params)) {
            dispatch(setItemsCollection({ itemType: params }));
            toggleVisibleMode(true);
        } else {
            toggleVisibleMode(false);
        }
    }, [params]);

    return [isVisible];
}