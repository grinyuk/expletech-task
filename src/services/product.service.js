import axiosService from "./axios.service";
import {urls} from "../configs/Urls";

export const productService = {
    getAll: () => axiosService.get(urls.products).then(value => value.data),
    getById: (id) => axiosService.get(`${urls.products}/${id}`).then(value => value.data)
}
