import axios from 'axios'

const api = axios.create({
    baseURL: 'https://omnistack-bk.herokuapp.com/',
})

export default api