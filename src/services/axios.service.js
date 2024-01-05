import axios from "axios";

import baseURL from "../configs/Urls";

const axiosService = axios.create({
    baseURL
});

export default axiosService;