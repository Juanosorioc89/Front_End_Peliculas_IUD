import axios from "axios";

export const axiosconfiguration = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL || 
    'http://localhost:4000/api/v1/'

})