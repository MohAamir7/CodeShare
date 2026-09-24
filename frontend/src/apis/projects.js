import axios from '../config/axiosConfig'

export const CreateProject = async()=>{
    try {
        const res = await axios.post('/api/v1/projects');
        // console.log(res.data);
        return res.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const GetProjectTree = async(projectId)=>{
    try {
        const res = await axios.get(`/api/v1/projects/${projectId}/tree`)
        // console.log(res.data);
        return res.data
    } catch (error) {
        console.log(error);
        throw error;
    }
}
