import CryptoJS from "crypto-js";
import { encKey } from "../config";

export const setSession = (data) => {
    let ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), encKey).toString();
    localStorage.setItem('user', ciphertext);
}

export const getSession = () => {
    let userData = localStorage.getItem('user');
    if(userData) {
        let ciphertext = CryptoJS.AES.decrypt(userData, encKey);
        return JSON.parse(ciphertext.toString(CryptoJS.enc.Utf8));
    } else {
        return '';
    }
}