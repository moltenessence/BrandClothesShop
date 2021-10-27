import { Menu } from "antd";
import './../style/style.scss';
import useNavMenu from "../hooks/useNavMenu";
import { connect, ConnectedProps } from "react-redux";
import ConstItems from "./MenuItems/ConstItems";
import { RootState } from "../../../Store/store";
import AuthedItems from "./MenuItems/AuthedItems";


interface TProps extends ConnectorProps {
    modalOpen: () => void,
}

const NavMenu = ({ modalOpen, isAuth }: TProps) => {

    const [darkMode] = useNavMenu();

    return (
        <div className={darkMode ? 'navMenuWrapperDark' : 'navMenuWrapperLight'}>
            <Menu mode={'vertical'}>
                <ConstItems />
                {
                    isAuth ?
                        <AuthedItems />
                        :

                        <Menu.Item className={'loginItem'} onClick={() => modalOpen()}>
                            <span className='navLink'>Login</span>
                        </Menu.Item>
                }
            </Menu>
        </div>
    );
}

const mapStateToProps = (state: RootState) => {
    return {
        isAuth: state.authMe.isAuth,
    }
}

const connector = connect(mapStateToProps);

type ConnectorProps = ConnectedProps<typeof connector>

export default connector(NavMenu);