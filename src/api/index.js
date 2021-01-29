import axios from "axios";

const API = {
    getList: () => {
        return axios.get(`https://api.unsplash.com/photos`, {
            params: {
                client_id:"Beb3DvOszHNZhGauHt6LdPWtoo1OrvDzIdbluYmIZDs",
                per_page: 15,
            }
        })
    }
}

export default API;