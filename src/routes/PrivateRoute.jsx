import { useEffect } from "react";
import { Route, useHistory } from "react-router-dom";


const PrivateRoute = (props) => {
    let history = useHistory();
    useEffect(() => {
        let session = sessionStorage.getItem('account');
        if (!session) {
            history.push("/login");
        }
    }, [])

    return (
        <>
            <Route path={props.path} element={props.element} />
        </>
    )
}

export default PrivateRoute;