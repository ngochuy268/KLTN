
import { Route, Redirect } from "react-router-dom";
import React from "react";
import { UserContext } from "../context/userContext";


const PrivateRoute = (props) => {

    const { user } = React.useContext(UserContext);

    if (user && user.isAuthenticated === true) {
        return (
            <>
                <Route path={props.path} component={props.component} />
            </>
        )
    } else {
        return <Redirect to='/login'></Redirect>
    }


}

export default PrivateRoute;