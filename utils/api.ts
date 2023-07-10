import axios from "axios";
import {STRAPI_API} from "../config";
export const Api = axios.create({
    baseURL: STRAPI_API + "/api",
    // timeout: 30000,
});
