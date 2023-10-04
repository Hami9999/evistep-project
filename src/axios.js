import axios from "axios";
// import store from "@/store";
import router from './router'
import store from "@/store";

axios.defaults.baseURL = 'https://azapp-playground-demo-api.azurewebsites.net/api/';
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

axios.interceptors.response.use(function (response) {
    return response
}, async function (error) {
    if (error.response.status === 401) {
        store.dispatch("user/usersLogout");
        router.push('/')

    } else if (error.response.status === 400) {
        console.log('Email not found')
    }
    return Promise.reject(error)
})



