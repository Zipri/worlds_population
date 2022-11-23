import axios from 'axios'

let config = {
    withCredentials: true,
    baseURL: "https://restcountries.com/v3.1/",
}

const instance = axios.create(config);

export const worldsPopApi = {
    getAll () {
        return instance.get('all').then(response => response.data)
    },
    getRegion (regionName) {
        return instance.get(`region/${regionName}`).then(response => response.data)
    },
}