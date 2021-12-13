import {FC, useEffect, useState} from "react";
import {useParams} from "react-router";
import styles from "./style/styles.module.scss"

const MainHeader: FC = () => {
    const params: string = useParams<{ params: string }>().params;
    const [darkMode, toggleMode] = useState(false);

    useEffect(() => {
        params ? toggleMode(true) : toggleMode(false);
    });

    return (
        <div className={styles.header}>
            <span className={darkMode ? styles.darkLogo : styles.lightLogo}>WEB SHOP</span>
        </div>
    );
}

export default MainHeader;