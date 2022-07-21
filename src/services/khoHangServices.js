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

export { fetchAllLoaiSP, fetchAllSP, fetchDataLoaiSP, fetchAllSPS, fetchAllLoaiSPS }