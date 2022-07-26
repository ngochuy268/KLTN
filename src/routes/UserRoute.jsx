import { Route } from "react-router-dom";
import styles from '../pages/decentralizations/employee/layouts/css/Content.module.scss';
import CaNhan from "../pages/decentralizations/share/CaNhan/CaNhan";
import CongViec from "../pages/decentralizations/share/CongViec/CongViec";
import NhapHang from "../pages/decentralizations/share/NhapHang/NhapHang";
import XuatHang from "../pages/decentralizations/share/XuatHang/XuatHang";

import PrivateRoute from "./PrivateRoute";


function ContentEmployee() {
    return (
        <div className={styles.content}>

            <PrivateRoute path='/canhan' component={CaNhan} />
            <PrivateRoute path='/nhaphang' component={NhapHang} />
            <PrivateRoute path='/xuathang' component={XuatHang} />
            <PrivateRoute path='/congviec' component={CongViec} />
            {/* <Route path="*"> 404 not found !</Route> */}

        </div>
    );
}

export default ContentEmployee;