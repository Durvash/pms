import axios from "axios";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { apiUrl, appDevice } from "../config";

export const successMsg = (message) => toast.success(message, {
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false
})

export const errorMsg = (message) => toast.error(message, {
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false
})

export const warningMsg = (message) => toast.warning(message, {
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false
})

export const infoMsg = (message) => toast.info(message, {
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false
})

export const apiRequest = (data) => {
    try {
        let api_name = data?.api;
        let method = data?.method;
        let token = data?.token;
        delete data.method;
        delete data.api;
        delete data.token;

        axios.defaults.baseURL = apiUrl;
        axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;multipart/form-data';
        axios.defaults.headers.post['device'] = appDevice;
        axios.defaults.headers.post['authtoken'] = token;
        axios.defaults.headers.get['Content-Type'] = 'application/json;charset=UTF-8';
        axios.defaults.headers.get['device'] = appDevice;
        axios.defaults.headers.get['authtoken'] = token;
        axios.defaults.timeout = 1000 * 60; // Wait for 60 seconds

        if (method == 'POST') {
            let response = axios.post(api_name, data)
            return response;
        } else {
            let response = axios.get(api_name, data)
            return response;
        }

    } catch (error) {
        return {
            success: 0,
            message: error
        }
    }
}

export const getDayWish = (hour) => {
    if(!hour) {
        let date = new Date();
        hour = date.getHours();
    }
    if(hour >= 0 && hour < 12) {
        return 'Good Morning';
    }
    if(hour >= 12 && hour < 17) {
        return 'Good Afternoon';
    }
    if(hour >= 17 && hour < 20) {
        return 'Good Evening';
    }
    if(hour >= 20) {
        return 'Good Night';
    }
}
