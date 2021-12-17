import React, {FC} from 'react';
import styles from "./styles/profile.module.scss";
import {Typography} from "antd";
import Title from "antd/es/typography/Title";

interface IProps {
}

const ProfileModalBody: FC = (props) => {
    return (
        <div className={styles.contentHolder}>
            <div className={styles.userMenu}>
                <div className={styles.avatarContainer}>
                    <img
                        className={styles.avatar}
                        src="https://sun9-26.userapi.com/impg/aXt0dQVUhrPkr2MVa2DBAHA6DOKyUsdlzVUXUw/SuBcQqMhh3I.jpg?size=980x981&quality=96&sign=c696712886e7b2ba8243dd5445cae4c5&type=album"
                        alt="avatar"/>
                </div>
                <Typography className={styles.userName}>
                    <Title>
                        USERNAME
                    </Title>
                </Typography>
            </div>
        </div>
    );
}

export default ProfileModalBody;