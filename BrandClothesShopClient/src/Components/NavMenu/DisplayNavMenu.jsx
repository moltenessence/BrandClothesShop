import React from "react";
import './style/style.scss';
import { useAuthModal } from "../AuthMe/hooks/useAuthModal/useAuthModal";
import NavMenu from "./NavMenuComponent/NavMenu";

const DisplayNavMenu = (props) => {

    const { ModalComponent, modalOpen } = useAuthModal();

    return (
        <>
            <ModalComponent />
            <NavMenu modalOpen={modalOpen} />
        </>
    );
}

export default DisplayNavMenu;