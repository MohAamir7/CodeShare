import { create } from "zustand";
import { QueryClient } from "@tanstack/react-query";
import { GetProjectTree } from "../apis/projects";

const queryClient = new QueryClient();

export const ProjectTreeStore = create((set, get) => ({
  projectId: null,
  treeStructure: null,

  setProjectId: (id) => set({ projectId: id }),

  setTreeStructure: async () => {
    const id = get().projectId;
    const tree = await queryClient.fetchQuery({
      queryKey: [`projectTree-${id}`],
      queryFn: () => GetProjectTree({ projectId: id }),
    });

    console.log(tree);

    set({ treeStructure: tree });
  },
}));
