import express from "express";
// import router from '../routes/V1';

import { ProjectService,ProjectDirectoryTree } from "../services/projectServices.js";

// const execPromisified = util.promisify(Child_Process.exec);

export const Createproject = async (req, res) => {
  const projectId = await ProjectService();
  console.log(req.params.projectId);

  return res.json({ message: "project Created", id: projectId });
};

export const GetprojectTree = async (req,res)=>{

    const tree = await ProjectDirectoryTree(req.params.projectId);

    return res.status(200).json({
        data: tree,
        success: true,
        message: "Successfully fetched the tree"
    })
}