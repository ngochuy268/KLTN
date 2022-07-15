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
            <Switch>

                {/* Menu Routes */}
                <Route path='/tongquan' element={<TongQuan />} />
                <Route path='/congviec' element={<CongViec />} />
                <Route path='/baocao' element={<BaoCao />} />

                {/* Quản lý kho Routes */}
                <Route path='/quanlykho/danhsachsanpham' element={<DanhSachSanPham />} />
                <Route path='/quanlykho/themsanpham' element={<ThemSanPham />} />
                <Route path='/quanlykho/tongquan' element={<TongQuan1 />} />
                <Route path='/quanlykho/xuatnhap' element={<XuatNhap />} />

                {/* Quản lý nhân viên Routes */}
                <Route path="/quanlynhanvien/danhsachnhanvien" element={<DanhSachNhanVien />} />
                <Route path="/quanlynhanvien/themnhanvien" element={<ThemNhanVien />} />

            </Switch>
        </div>
    );
}

export default ContentAdmin;