import axios from "axios";

const fetchAllLoaiSP = () => {
    return axios.get('http://localhost:8000/api/v1/xuatnhap/xuatkho/tongquan/loaisanphamlinechart')
}

const fetchAllSP = () => {
    return axios.get('http://localhost:8000/api/v1/xuatnhap/xuatkho/tongquan/sanphamlinechart')
}

const fetchDataLoaiSP = () => {
    return axios.get('http://localhost:8000/api/v1/xuatnhap/xuatkho/tongquan/listloaisanpham')
}

export { fetchAllLoaiSP, fetchAllSP, fetchDataLoaiSP }