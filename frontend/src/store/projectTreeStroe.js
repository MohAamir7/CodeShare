import { create } from "zustand";
import { QueryClient } from "@tanstack/react-query";
import { GetProjectTree } from "../apis/projects";

const queryClient = new QueryClient();

export const ProjectTreeStore = create((set, get) => ({
//   projectId: null,
  treeStructure: null,
  treeProjectId: null,
  treeError: null,

  setTreeStructure: async (projectId) => {
    if (!projectId) {
      throw new Error("A project ID is required to fetch the project tree.");
    }

    set({ treeProjectId: projectId, treeStructure: null, treeError: null });

    try {
      const tree = await queryClient.fetchQuery({
        queryKey: ["projectTree", projectId],
        queryFn: () => GetProjectTree(projectId),
      });

      if (get().treeProjectId === projectId) {
        set({ treeStructure: tree });
      }
      return tree;
    } catch (error) {
      if (get().treeProjectId === projectId) {
        set({ treeError: error });
      }
      throw error;
    }
  },
}));
