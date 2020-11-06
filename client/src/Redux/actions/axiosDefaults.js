import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5000/api",
    headers: {
        "Authorization": "",
        "Content-Type": "application/json"
    }
})

export default api;