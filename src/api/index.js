import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://api.unsplash.com",
    timeout: 6000,
})

const request = (method, url, data) => {

    const config = {
        url,
        method,
    };

    if (method === "get") {
        config.params = data;
    } else {
        config.data = data;
    }

    return axiosInstance(config)
}

const API = {
    getPhotos: (data) => request("get", "/photos", data),
    searchPhotos: (data) => request("get", "/search/photos", data),
    searchCollections: (data) => request("get", "/search/collections", data)

}

export default API;