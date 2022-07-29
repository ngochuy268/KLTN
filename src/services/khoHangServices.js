import axios from "../setup/axios";

const fetchAllLoaiSP = () => {
    return axios.get('/api/v1/xuatnhap/xuatkho/tongquan/loaisanphamlinechart')
}

const fetchAllSP = () => {
    return axios.get('/api/v1/xuatnhap/xuatkho/tongquan/sanphamlinechart')
}

const fetchDataLoaiSP = () => {
    return axios.get('/api/v1/xuatnhap/xuatkho/tongquan/listloaisanpham')
}

const fetchAllSPS = () => {
    return axios.get('/api/v1/xuatnhap/xuatkho/tongquan/sanphamlinecharts')
}

const fetchAllLoaiSPS = () => {
    return axios.get('/api/v1/xuatnhap/xuatkho/tongquan/loaisanphamlinechart')
}

const fetchDataDSXuatKho = () => {
    return axios.get('/api/v1/xuatnhap/xuatkho/admin');
}

const fetchDataDSNhapKho = () => {
    return axios.get('/api/v1/xuatnhap/nhapkho/admin');
}

const fetchDataPieChart = () => {
    return axios.get('/api/v1/khohang/tongquan/piechartdata');
}

const fetchDataPieChartTable = (MaLoai) => {
    return axios.post('/api/v1/khohang/tongquan/danhsachsanpham', { MaLoai });
}

const fetchDataShowSP = () => {
    return axios.get('/api/v1/sanpham/show')
}

const fetchDataShowNV = () => {
    return axios.get('/api/v1/user/show')

}

const fetchDataSelectLoaiSP = () => {
    return axios.get('/api/v1/select/loaisanpham')
}

const fetchDataSelectSP = (MaLoai) => {
    return axios.post('/api/v1/select/sanpham', { MaLoai })
}

const getLoaiSPTQ = () => {
    return axios.get('/api/v1/khohang/tongquan/loaisanpham')
}

const congViecNhap = (id) => {
    return axios.post('/api/v1/xuatnhap/nhapkho/user', { id })
}
const congViecXuat = (id) => {
    return axios.post('/api/v1/xuatnhap/xuatkho/user', { id })
}

const fetchNotification = () => {
    return axios.get('/api/v1/thongbao');
}

const fetchPredictSP = () => {
    return axios.get('/api/v1/xuatnhap/tongquan/dudoansanpham');
}

const fetchPredictSL = () => {
    return axios.get('/api/v1/xuatnhap/tongquan/dudoansoluong');
}


const addDataKhoHang = (listdata) => {
    return axios.post('/api/v1/nhaphang', { listdata })
}

const getDataXuatHang = (findValue) => {
    return axios.post('/api/v1/xuathang/getdata', { findValue })
}


export {
    fetchAllLoaiSP, fetchAllSP, fetchDataLoaiSP, fetchAllSPS,
    fetchAllLoaiSPS, fetchDataDSXuatKho, fetchDataDSNhapKho,
    fetchDataPieChart, fetchDataPieChartTable, getLoaiSPTQ,
    fetchDataShowSP, fetchDataShowNV, fetchDataSelectSP,
    fetchDataSelectLoaiSP, congViecNhap, fetchNotification,
    addDataKhoHang, getDataXuatHang, fetchPredictSP,
    fetchPredictSL, congViecXuat

}
