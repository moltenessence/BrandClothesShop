import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { setBackground } from "../../../Store/Reducers/homePageReducer/actionCreators";
import styles from "./styles/HomePageBackground.module.scss";

const HomePageBackground = (props) => {
    const dispatch = useDispatch();

    useEffect(() => dispatch(props.setBackground({ url: 'https://sun9-44.userapi.com/impf/c851328/v851328291/1afa24/p1YoZbAiNrQ.jpg?size=959x1280&quality=96&sign=c89220d868d218e81bbf9d1c139a3a8a&type=album' })));

    return (
        <div className={styles.pageBackground} style={{
            backgroundImage: `url(${props.backgroundUrl})`,
        }} />
    );
}

const mapStateToProps = (state) => {
    return {
        backgroundUrl: state.homePage.backgroundUrl,
    }
}

export default connect(mapStateToProps, { setBackground })(HomePageBackground);