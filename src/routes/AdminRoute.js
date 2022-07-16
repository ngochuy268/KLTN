import { Route, Switch } from "react-router-dom";
import styles from '../pages/decentralizations/admin/layouts/css/Content.module.scss';

import TongQuan from "../pages/decentralizations/admin/pages/TongQuan/TongQuan";
import CongViec from "../pages/decentralizations/admin/pages/CongViec/CongViec";
import BaoCao from "../pages/decentralizations/admin/pages/BaoCao/BaoCao";

import DanhSachSanPham from "../pages/decentralizations/admin/pages/QuanLyKho/DanhSachSanPham/DanhSachSanPham";
import ThemSanPham from "../pages/decentralizations/admin/pages/QuanLyKho/ThemSanPham/ThemSanPham";
import TongQuan1 from "../pages/decentralizations/admin/pages/QuanLyKho/TongQuan/TongQuan";
import XuatNhap from "../pages/decentralizations/admin/pages/QuanLyKho/XuatNhap/XuatNhap";

import DanhSachNhanVien from "../pages/decentralizations/admin/pages/QuanLyNhanVien/DanhSachNhanVien/DanhSachNhanVien";
import ThemNhanVien from "../pages/decentralizations/admin/pages/QuanLyNhanVien/ThemNhanVien/ThemNhanVIen";

function ContentAdmin() {
    return (
        <div className={styles.content}>

            {/* Menu Routes */}
            <Route path='/tongquan' component={TongQuan} />
            <Route path='/congviec' component={<CongViec />} />
            <Route path='/baocao' component={<BaoCao />} />

            {/* Quản lý kho Routes */}
            <Route path='/quanlykho/danhsachsanpham' component={<DanhSachSanPham />} />
            <Route path='/quanlykho/themsanpham' component={<ThemSanPham />} />
            <Route path='/quanlykho/tongquan' component={TongQuan1} />
            <Route path='/quanlykho/xuatnhap' component={<XuatNhap />} />

            {/* Quản lý nhân viên Routes */}
            <Route path="/quanlynhanvien/danhsachnhanvien" component={<DanhSachNhanVien />} />
            <Route path="/quanlynhanvien/themnhanvien" component={<ThemNhanVien />} />

        </div>
    );
}

export default ContentAdmin;