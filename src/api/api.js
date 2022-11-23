import axios from 'axios'

let config = {
    withCredentials: true,
    baseURL: "https://restcountries.com/v3.1/",
}

const instance = axios.create(config);

export const worldsPopApi = {
    getRegion (regionName) {
        return instance.get(`region/${regionName}`).then(response => response.data)
    },
}