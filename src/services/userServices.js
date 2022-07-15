import axios from "axios";

const loginUser = (idNhanVien, password) => {
    return axios.post('http://localhost:8000/api/v1/login', {
        idNhanVien, password
    })
}

export { loginUser };