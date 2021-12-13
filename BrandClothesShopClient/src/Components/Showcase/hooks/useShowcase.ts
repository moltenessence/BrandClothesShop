import {useState, useEffect} from "react";
import {useDispatch} from "react-redux";
import {ActionTypes} from "../../../Store/Reducers/showcaseReducer/types/actionTypes";
import {setItemsCollection} from "../../../Store/Reducers/showcaseReducer/actionCreators";
import {useParams} from 'react-router';
import {Dispatch} from "hoist-non-react-statics/node_modules/@types/react";

const useShowcase = (): boolean[] => {

    const dispatch = useDispatch<Dispatch<ActionTypes>>();

    const urlTriggers: string[] = ['t-shirt', 'hoodie', 'pants', 'shoes'];
    const [isVisible, toggleVisibleMode] = useState(false);
    const params: string = useParams<{ params: string }>().params;

    useEffect(() => {
        if (urlTriggers.some(item => item === params)) {
            dispatch(setItemsCollection({itemType: params}));
            toggleVisibleMode(true);
        } else {
            toggleVisibleMode(false);
        }
    }, [params]);

    return [isVisible];
}

export default useShowcase;