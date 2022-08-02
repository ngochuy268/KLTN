import axios from "../setup/axios";

const loginUser = (idNhanVien, password) => {
    return axios.post('/api/v1/login', {
        idNhanVien, password
    })
}

const getUser = (id) => {
    console.log(">>> check services")
    return axios.post('/api/v1/user/shows', { id })
}
const createUser = (userValue) => {
    return axios.post('/api/v1/user/create', { userValue })
}

const createSP = (valueObj, valueObjLoaiSP) => {
    return axios.post('/api/v1//sanpham/create', { valueObj, valueObjLoaiSP })
}

const updateUser = (userData) => {
    return axios.put('/api/v1/user/update', { userData })
}

const updateVang = (id) => {
    return axios.put('/api/v1/user/setvang', { id })
}

export { loginUser, getUser, createUser, createSP, updateUser, updateVang };