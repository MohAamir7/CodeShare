import express from 'express'
// import router from '../routes/V1';
import util from 'util'
import Child_Process  from 'child_process'
import fs from 'fs/promises'
import { v4 as uuidv4 } from 'uuid';

const execPromisified = util.promisify(Child_Process.exec);


export const Createproject = async(req,res)=>{
    const projectId = uuidv4();
    console.log("new project id is",projectId)

    await fs.mkdir(`./projects/${projectId}`);
    const response = await execPromisified('npm exec --yes create vite@latest sandbox -- --template react', {
        cwd: `./projects/${projectId}`})

        return res.json({message:"project Created",id:projectId});
}

