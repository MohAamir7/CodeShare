import axios from '../config/axiosConfig'

export const CreateProject = async()=>{
    try {
        const res = await axios.post('/api/v1/projects');
        console.log(res.data);
        return res.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}