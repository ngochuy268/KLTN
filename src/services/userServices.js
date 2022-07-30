import axios from "../setup/axios";

const loginUser = (idNhanVien, password) => {
    return axios.post('/api/v1/login', {
        idNhanVien, password
    })
}

const getUser = (id) => {
    return axios.post('/api/v1/user/shows', { id })
}
const createUser = (userValue) => {
    return axios.post('/api/v1/user/create', { userValue })
}
export { loginUser, getUser, createUser };