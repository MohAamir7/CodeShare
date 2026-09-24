import { create } from "zustand";


export const ProjectTreeStore = create((set)=>{
    return{
        treeStucture:null,
    }
})