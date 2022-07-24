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

const getLoaiSPTQ = () => {
    return axios.get('/api/v1/khohang/tongquan/loaisanpham')
}



export {
    fetchAllLoaiSP, fetchAllSP, fetchDataLoaiSP, fetchAllSPS,
    fetchAllLoaiSPS, fetchDataDSXuatKho, fetchDataDSNhapKho,
    fetchDataPieChart, fetchDataPieChartTable, getLoaiSPTQ
}