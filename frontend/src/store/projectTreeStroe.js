import { create } from "zustand";

export const ProjectTreeStore = create((set) => ({
    projectId: null,

    setProjectId: (projectId) => {
        set({
            projectId,
        });
    },
}));