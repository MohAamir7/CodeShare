import util from 'util'
import Child_Process  from 'child_process'
import fs from 'fs/promises'
import { v4 as uuidv4 } from 'uuid';
import express from 'express'
import path from 'node:path';
import directoryTree from 'directory-tree'
const execPromisified = util.promisify(Child_Process.exec);

export const ProjectService = async ()=>{
     const projectId = uuidv4();
    const projectPath = path.resolve('projects', projectId);
    console.log("new project id is", projectId);

    await fs.mkdir(projectPath, { recursive: true });
    await execPromisified('npm create vite@latest . -- --template react', {
        cwd: projectPath
    });


        return projectId;
}


export const ProjectDirectoryTree = async (projectId)=>{
    const Projectpath = path.resolve(`./projects/${projectId}`);
    const tree = directoryTree(Projectpath);
    return tree;
}