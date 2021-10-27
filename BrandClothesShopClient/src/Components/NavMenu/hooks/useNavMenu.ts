import { useEffect, useState } from "react";
import { useParams } from "react-router";


export default (): [boolean] => {

    const urlParams = useParams<{ params: string }>().params;
    const [darkMode, toggleMode] = useState(true);

    useEffect(() => {
        urlParams ? toggleMode(true) : toggleMode(false);
    }, [urlParams]);

    return [darkMode];
}