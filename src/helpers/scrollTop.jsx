import {useLocation} from "react-router-dom";
import {useEffect} from "react";

function ScrollTop() {
    const {pathname} = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
}

export default ScrollTop;