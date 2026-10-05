import { create } from "zustand";
import { useActiveFileTabStore } from "./ActiveFileStoreTab";
import { use } from "react";

export const useEditorSocket = create((set) => ({
  EditorSocket: null,

  setEditorSocket: async (incomingSocket) => {
    const activeFileSetter = useActiveFileTabStore.getState().setActiveFileTab;
    // const activeFileTab = useActiveFileTabStore.getState().activeFileTab;
    incomingSocket?.on("readFilesSuccess", (data) => {
    //   console.log("Received file content:", data);
      activeFileSetter(data.path, data.value);
    });
    incomingSocket?.on("writeFilesSuccess", (data) => {
      console.log("File write successful:", data,);
      incomingSocket.emit("readFiles",{
        pathTofileFolder:data.path
        });
    });
    set({
      EditorSocket: incomingSocket,
    });
  },
}));
