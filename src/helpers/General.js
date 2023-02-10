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

export const apiRequest = (method, data = {}, headers = {}) => {
    try {
        let api_name = data?.api;
        if (api_name) delete data.api;

        axios.defaults.baseURL = apiUrl;
        axios.defaults.timeout = 1000 * 60; // Wait for 60 seconds
        // debugger
        if (method.toLowerCase() == 'post') {
            axios.defaults.headers.post = headers;
            axios.defaults.headers.post['device'] = appDevice;
            let response = axios.post(api_name, data)
            return response;
        } else {
            axios.defaults.headers.get = headers;
            axios.defaults.headers.get['device'] = appDevice;
            let response = axios.get(api_name, data)
            return response;
        }

    } catch (error) {
        return {
            data: {
                success: 0,
                message: error
            }
        }
    }
}

export const getDayWish = (hour) => {
    if (!hour) {
        let date = new Date();
        hour = date.getHours();
    }
    if (hour >= 0 && hour < 12) {
        return 'Good Morning';
    }
    if (hour >= 12 && hour < 17) {
        return 'Good Afternoon';
    }
    if (hour >= 17 && hour < 20) {
        return 'Good Evening';
    }
    if (hour >= 20) {
        return 'Good Night';
    }
}
