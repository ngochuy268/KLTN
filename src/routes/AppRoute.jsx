import { Switch, Route } from "react-router-dom";

import NhapHang from "../pages/decentralizations/admin/pages/NhapXuatKho/NhapHang/NhapHang";
import XuatHang from "../pages/decentralizations/admin/pages/NhapXuatKho/XuatHang/XuatHang";
import CaNhan from "../pages/decentralizations/employee/layouts/Layout";
import Login from '../pages/Login/LoginForm';
import NavCaNhan from '../pages/decentralizations/employee/layouts/Layout';

import ForgotPasswordInFo from '../pages/Login/ForgotPassword';
import ChangePassword from '../pages/Login/ResetPassword';
import PrivateRoute from "./PrivateRoute";
import AdminRoute from './AdminRoute';
import LayoutAdmin from "../pages/decentralizations/admin/layouts/Layout";

const AppRoutes = (props) => {
    return (
        <>
            <Switch>

                {/* <Route path="/" component={Login}></Route> */}
                <LayoutAdmin />
                <AdminRoute/>
                <Route path="/login" component={Login}></Route>
                <Route path='/forgotPassword_info' component={ForgotPasswordInFo}> </Route>
                <Route path='/changePassword' component={ChangePassword}></Route>
                <PrivateRoute path="/user" component={CaNhan}></PrivateRoute>
                <PrivateRoute path="/admin" component={LayoutAdmin}></PrivateRoute>

                <Route path='/nhapxuatkho/nhaphang' component={NhapHang} />
                <Route path='/nhapxuatkho/xuathang' component={XuatHang} />
                <Route path="*"> 404 not found !</Route>

            </Switch>

        </>
    )
}

export default AppRoutes;