import {useEffect, useState} from "react";
import {useParams} from "react-router";

const useNavMenuLayout = (): [boolean] => {

    const urlParams: string = useParams<{ params: string }>().params;
    const [darkMode, toggleMode] = useState(true);

    useEffect(() => {
        urlParams ? toggleMode(true) : toggleMode(false);
    }, [urlParams]);

    return [darkMode];
}

export default useNavMenuLayout