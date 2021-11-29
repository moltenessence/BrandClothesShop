import 'antd/dist/antd.css';
import styles from './style/styles.module.scss';
import Preloader from "../Common/Components/Preloader/Preloader";
import useShowcase from "./hooks/useShowcase";
import ItemCollection from "./ItemCollection";
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from "../../Store/store";
import {FC} from "react";

interface IProps extends ConnectorProps {
}

const Showcase: FC<IProps> = ({isFetching}) => {

    const [isVisible]: boolean[] = useShowcase()

    return (
        isVisible ?
            <div className={styles.showcaseWrapper}>
                {isFetching ? <Preloader/> : <ItemCollection/>}
            </div> : null
    );
}

const mapStateToProps = (state: RootState) => ({isFetching: state.showcase.isFetching});

const connector = connect(mapStateToProps);

type ConnectorProps = ConnectedProps<typeof connector>;

export default connector(Showcase);
