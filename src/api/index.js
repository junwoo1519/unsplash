import {FetchJson} from "../lib/Fetch";

const API = {
    getPhotos: (data) => FetchJson.get("/photos", data),
    getPhoto: (data) => FetchJson.get("/photos", data),
    searchPhotos: (data) => FetchJson.get("/search/photos", data),
    searchCollections: (data) => FetchJson.get("/search/collections", data),
    searchUsers: (data) => FetchJson.get("/search/users", data)

}

export default API;