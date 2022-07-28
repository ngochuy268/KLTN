import { Switch, Route } from "react-router-dom";

import Login from '../pages/Login/LoginForm';

import ForgotPasswordInFo from '../pages/Login/ForgotPassword';
import ChangePassword from '../pages/Login/ResetPassword';
import LayoutAdmin from "../pages/decentralizations/admin/layouts/Layout";
import LayoutEmployee from '../pages/decentralizations/employee/layouts/Layout';

import React from "react";
import { UserContext } from "../context/userContext";

const AppRoutes = (props) => {
    const { user } = React.useContext(UserContext);
    return (
        <>
            <Switch>

                {/* <Route path="/" component={Login}></Route> */}
                <Route path="/login" component={Login}></Route>
                <Route path='/forgotPasswordinfo' component={ForgotPasswordInFo} />
                <Route path='/changePassword' component={ChangePassword}></Route>
                <LayoutAdmin />
                {/* 
                {user && user.isAuthenticated === true && +user.account.level === 2 ?
                    <>
                        <LayoutAdmin />
                    </>
                    : <>{user && user.isAuthenticated === true && +user.account.level === 1 ?
                        <>
                            <LayoutEmployee />
                        </>
                        :
                        <></>
                    }
                    </>
                } */}

                <Route path="*"> 404 not found !</Route>

            </Switch>

        </>
    )
}

export default AppRoutes;