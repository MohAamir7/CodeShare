import { QueryClient } from "@tanstack/react-query";
import { create } from "zustand";
import { GetProjectTree } from "../apis/projects";

const queryClient = new QueryClient()

export const ProjectTreeStore = create((set,get) => ({
    projectId: null,
    treeStructure:null,

    

    setTreeStructure:async (projectId)=>{
        const id = get().projectId;
        const tree = await queryClient.fetchQuery({
            queryKey:[`projectTree-${id}`],
            queryFn:()=> GetProjectTree({projectId:id})
        })

        console.log(tree);

        set({treeStructure:tree});
    },
    setProjectId: (projectId) => {
        set({
            projectId:projectId,
        });
    },

}));