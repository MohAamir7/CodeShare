import { create } from "zustand";
import { useActiveFileTabStore } from "./ActiveFileStoreTab";

export const useEditorSocket = create((set) => ({
  EditorSocket: null,

  setEditorSocket: async (incomingSocket) => {
    const activeFileSetter = useActiveFileTabStore.getState().setActiveFileTab;
    incomingSocket?.on("readFilesSuccess", (data) => {
      console.log("Received file content:", data);
      activeFileSetter(data.path, data.value);
    });
    set({
      EditorSocket: incomingSocket,
    });
  },
}));
