import axios from "axios";

const API = {
    getPhotos: () => {
        return axios.get(`https://api.unsplash.com/photos`, {
            params: {
                client_id:"Beb3DvOszHNZhGauHt6LdPWtoo1OrvDzIdbluYmIZDs",
                per_page: 15,
            }
        })
    },

    searchPhotos: (data) => axios({
        url: "https://api.unsplash.com/search/photos",
        method: "get",
        params: data
    }),

    searchCollections: (data) => axios({
        url: "https://api.unsplash.com/search/collections",
        method: "get",
        params: data
    })
}

export default API;