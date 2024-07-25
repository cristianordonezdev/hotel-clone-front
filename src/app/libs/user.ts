import * as CryptoJS from 'crypto-js';
import { environment } from "../../environments/environment";

const secret_key = environment.secret_key_crypto;

export const getUserData = (): any => {

    const encrypted_data = localStorage.getItem('userData');
    if (encrypted_data) {
        const bytes = CryptoJS.AES.decrypt(encrypted_data, secret_key);
        const decrypted_data = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        return decrypted_data;
    }
    return {};
}

export const setUserData = (data: any): void => {
    const data_string = JSON.stringify(data);
    const encrypted_data = CryptoJS.AES.encrypt(data_string, secret_key).toString();
    localStorage.setItem('userData', encrypted_data);
}