import {FetchJson} from "../lib/Fetch";

const API = {
    getPhotos: (data) => FetchJson.get("/photos", data),
    searchPhotos: (data) => FetchJson.get("/search/photos", data),
    searchCollections: (data) => FetchJson.get("/search/collections", data)

}

export default API;