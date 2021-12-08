import {FC, useEffect} from "react";
import {connect, useDispatch, ConnectedProps} from "react-redux";
import {setBackground} from "../../../Store/Reducers/homePageReducer/actionCreators";
import {ActionTypes} from '../../../Store/Reducers/homePageReducer/types/actionTypes';
import {RootState} from "../../../Store/store";
import styles from "./styles/HomePageBackground.module.scss";
import {Dispatch} from "hoist-non-react-statics/node_modules/@types/react";

interface IProps extends ConnectorProps {
}

const HomePageBackground: FC<IProps> = ({setBackground, backgroundUrl}) => {
    const dispatch = useDispatch<Dispatch<ActionTypes>>();

    useEffect(() => dispatch(setBackground({})));

    return (
        <div className={styles.pageBackground} style={{
            backgroundImage: `url(${backgroundUrl})`,
        }}/>
    );
}

const mapStateToProps = (state: RootState) => {
    return {
        backgroundUrl: state.homePage.backgroundUrl,
    }
}

const connector = connect(mapStateToProps, {setBackground});

type ConnectorProps = ConnectedProps<typeof connector>;

export default connector(HomePageBackground);