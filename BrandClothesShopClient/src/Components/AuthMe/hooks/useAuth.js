import { useState } from "react";

export default (authDisplay = false, registered = true) => {
    const [isAuthVisible, setAuthVisible] = useState(authDisplay);
    const [isRegistered, setIsRegistered] = useState(registered);

    const Auth = {
        isAuthVisible,
        setAuthVisible,
        isRegistered,
        setIsRegistered,
    }
    return Auth;
}