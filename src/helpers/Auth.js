import CryptoJS from "crypto-js";
import { encKey } from "../config";

export const setSession = (data) => {
    let ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), encKey).toString();
    localStorage.setItem('user', ciphertext);
}

export const getSession = () => {
    let ciphertext = CryptoJS.AES.decrypt(localStorage.getItem('user'), encKey);
    return JSON.parse(ciphertext.toString(CryptoJS.enc.Utf8));
}