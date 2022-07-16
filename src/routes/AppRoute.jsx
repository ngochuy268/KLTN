import { Switch, Route } from "react-router-dom";

import NhapHang from "../pages/decentralizations/admin/pages/NhapXuatKho/NhapHang/NhapHang";
import XuatHang from "../pages/decentralizations/admin/pages/NhapXuatKho/XuatHang/XuatHang";
// import CaNhan from "../pages/decentralizations/admin/pages/CaNhan/CaNhan";
import Login from '../pages/Login/LoginForm';
import NavCaNhan from '../pages/decentralizations/employee/layouts/Layout';
import ForgotPasswordInFo from '../pages/Login/ForgotPassword';
import ChangePassword from '../pages/Login/ResetPassword';
import PrivateRoute from "./PrivateRoute";
import CaNhan from "../pages/decentralizations/employee/pages/CaNhan/CaNhan";
import ContentAdmin from "./AdminRoute";
import LayoutAdmin from "../pages/decentralizations/admin/layouts/Layout";
import AdminRoute from './AdminRoute';
const AppRoutes = (props) => {
    return (
        <>
            <Switch>
                <LayoutAdmin />
                <AdminRoute />
                {/* <Route path="/" component={Login}></Route> */}
                <Route path="/login" component={Login}></Route>
                <Route path='/forgotPassword_info' component={ForgotPasswordInFo}> </Route>
                <Route path='/changePassword' component={ChangePassword}></Route>
                {/* <Route path='/user' component={CaNhan} /> */}
                <PrivateRoute path="/user" component={CaNhan} />
                <Route path='/nhapxuatkho/nhaphang' component={NhapHang} />
                <Route path='/nhapxuatkho/xuathang' component={XuatHang} />
                <Route path="*"> 404 not found !</Route>
            </Switch>



        </>
    )
}

export default AppRoutes;