import axios from "../setup/axios";

const loginUser = (idNhanVien, password) => {
    return axios.post('/api/v1/login', {
        idNhanVien, password
    })
}

const getUser = (id) => {
    return axios.post('/api/v1/user/shows', { id })
}

export { loginUser, getUser };