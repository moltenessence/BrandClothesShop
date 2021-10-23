import React, { useEffect } from "react";
import './style/style.scss';
import { useAuthModal } from "../AuthMe/hooks/useAuthModal/useAuthModal";
import NavMenu from "./NavMenuComponent/NavMenu";
import { connect } from "react-redux";

const DisplayNavMenu = ({ isAuth }) => {

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

const mapStateToProps = (state) => {
    return {
        isAuth: state.authMe.isAuth,
    }
}

export default connect(mapStateToProps)(DisplayNavMenu);