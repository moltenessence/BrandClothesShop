import { useEffect } from "react";
import './style/style.scss';
import { useAuthModal } from "../AuthMe/hooks/useAuthModal/useAuthModal";
import NavMenu from "./NavMenuComponent/NavMenu";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../Store/store";


interface TProps extends ConnectorProps { }

const DisplayNavMenu = ({ isAuth }: TProps) => {

    const { ModalComponent, modalOpen, modalClose } = useAuthModal();

    useEffect(() => {
        if (isAuth) modalClose()
    }, [isAuth]);

    return (
        <>
            <ModalComponent />
            <NavMenu modalOpen={modalOpen} />
        </>
    );
}

const mapStateToProps = (state: RootState) => {
    return {
        isAuth: state.authMe.isAuth,
    }
}

const connector = connect(mapStateToProps);

type ConnectorProps = ConnectedProps<typeof connector>

export default connector(DisplayNavMenu);