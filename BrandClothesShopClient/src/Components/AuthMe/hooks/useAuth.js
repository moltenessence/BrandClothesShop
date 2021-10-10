import { useState } from "react";

export default () => {
    const [isAuthVisible, setAuthVisible] = useState(false);
    const [isRegistered, setIsRegistered] = useState(true);

    const Auth = {
        isAuthVisible,
        setAuthVisible,
        isRegistered,
        setIsRegistered,
    }
    return Auth;
}