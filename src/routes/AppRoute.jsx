import { Switch, Route } from "react-router-dom";

import NhapHang from "../pages/decentralizations/admin/pages/NhapXuatKho/NhapHang/NhapHang";
import XuatHang from "../pages/decentralizations/admin/pages/NhapXuatKho/XuatHang/XuatHang";
// import CaNhan from "../pages/decentralizations/admin/pages/CaNhan/CaNhan";
import Login from '../pages/Login/LoginForm';
import NavCaNhan from '../pages/decentralizations/employee/layouts/Layout';
import ForgotPasswordInFo from '../pages/Login/ForgotPassword';
import ChangePassword from '../pages/Login/ResetPassword';
import PrivateRoute from "./PrivateRoute";

const AppRoutes = (props) => {
    return (
        <>
            <Switch>
                <Route path="/" component={Login}></Route>
                <Route path="/login" component={Login }></Route>
                <Route path='/forgotPassword_info' component={ForgotPasswordInFo }> </Route>
                <Route path='/changePassword' component={ChangePassword}></Route>
                <PrivateRoute path="/user/" component={NavCaNhan }></PrivateRoute>
                {/* <Route path="/user" component={<NavCaNhan />}></Route> */}
                {/* <Route path="/admin" component={<LayoutAdmin />}></Route> */}
                {/* <Route path='/canhan' component={<CaNhan />} /> */}
                <Route path='/nhapxuatkho/nhaphang' component={NhapHang } />
                <Route path='/nhapxuatkho/xuathang' component={XuatHang } />
                <Route path="*"> 404 not found !</Route>
            </Switch>
            
            

        </>
    )
}

export default AppRoutes;