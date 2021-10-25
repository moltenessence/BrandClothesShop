import { useEffect } from "react";
import { connect, useDispatch, ConnectedProps } from "react-redux";
import { ActionTypes, setBackground } from "../../../Store/Reducers/homePageReducer/actionCreators";
import { RootState } from "../../../Store/store";
import styles from "./styles/HomePageBackground.module.scss";
import { Dispatch } from "hoist-non-react-statics/node_modules/@types/react";

interface IProps extends ConnectorProps { }

const HomePageBackground = ({ setBackground, backgroundUrl }: IProps) => {
    const dispatch = useDispatch<Dispatch<ActionTypes>>();

    useEffect(() => dispatch(setBackground({
        url: 'https://sun9-44.userapi.com/impf/c851328/v851328291/1afa24/p1YoZbAiNrQ.jpg?size=959x1280&quality=96&sign=c89220d868d218e81bbf9d1c139a3a8a&type=album'
    })));

    return (
        <div className={styles.pageBackground} style={{
            backgroundImage: `url(${backgroundUrl})`,
        }} />
    );
}

const mapStateToProps = (state: RootState) => {
    return {
        backgroundUrl: state.homePage.backgroundUrl,
    }
}

const connector = connect(mapStateToProps, { setBackground });

type ConnectorProps = ConnectedProps<typeof connector>;

export default connector(HomePageBackground);