import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from '../pages/decentralizations/employee/layouts/css/Content.module.scss';
import CaNhan from "../pages/decentralizations/employee/pages/CaNhan/CaNhan";

import CongViec from "../pages/decentralizations/employee/pages/CongViec/CongViec";
import NhapHang from "../pages/decentralizations/employee/pages/NhapHang/NhapHang";
import XuatHang from "../pages/decentralizations/employee/pages/XuatHang/XuatHang";


function ContentEmployee() {
    return (
        <div className={styles.content}>
            {/* <BrowserRouter> */}
                {/* <Routes> */}
                    <Route path='/canhan' component={CaNhan} />
                    <Route path='/nhaphang' component={NhapHang} />
                    <Route path='/xuathang' component={XuatHang} />
                    <Route path='/congviec' component={CongViec} />
                    {/* <Route path="*"> 404 not found !</Route> */}
                {/* </Routes> */}
            {/* </BrowserRouter> */}
        </div>
    );
}

export default ContentEmployee;