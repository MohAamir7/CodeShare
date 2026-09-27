import { create } from "zustand";
import { QueryClient } from "@tanstack/react-query";
import { GetProjectTree } from "../apis/projects";

const queryClient = new QueryClient();

export const ProjectTreeStore = create((set)=>({
//   projectId: null,
  treeStructure: null,

  setTreeStructure: async (projectId)=>{
    // const id = get().projectId;
    const tree = await queryClient.fetchQuery({
      queryKey:[`projectTree-${projectId}`],
      queryFn:()=>GetProjectTree(projectId),
    });

    console.log(tree);

    set({ treeStructure: tree });
  }
}));
