import axios from "../config/axiosConfig";


export const pingApi = async()=>{
    try {
        const res = await axios.get('/api/v1/ping');
        console.log(res.data);
        return res.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}