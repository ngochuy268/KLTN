import { Route, Routes } from "react-router-dom";
import styles from '../pages/decentralizations/employee/layouts/css/Content.module.scss';

import CaNhan from "../pages/decentralizations/employee/pages/CaNhan/CaNhan";
import CongViec from "../pages/decentralizations/employee/pages/CongViec/CongViec";


import NhapHang from "../pages/decentralizations/employee/pages/NhapHang/NhapHang";
import XuatHang from "../pages/decentralizations/employee/pages/XuatHang/XuatHang";

function ContentEmployee() {
    return (
        <div className={styles.content}>
            <Routes>
                {/* Ca nhan Routes */}
                <Route path='user/canhan' element={<CaNhan />} />

                {/* Menu Routes */}
                <Route path='/congviec' element={<CongViec />} />

                {/* Nhap xuat kho Routes */}
                <Route path='/nhaphang' element={<NhapHang />} />
                <Route path='/xuathang' element={<XuatHang />} />
            </Routes>
        </div>
    );
}

export default ContentEmployee;