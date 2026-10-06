import { create } from "zustand";
import { useActiveFileTabStore } from "./ActiveFileStoreTab";
import { use } from "react";
import { ProjectTreeStore } from "./projectTreeStroe";

export const useEditorSocket = create((set) => ({
  EditorSocket: null,

  setEditorSocket: async (incomingSocket) => {
    const activeFileSetter = useActiveFileTabStore.getState().setActiveFileTab;
    const setTreeStructuresetter = ProjectTreeStore.getState().setTreeStructure;
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
    incomingSocket?.on("deleteFiles",()=>{
        // console.log(data);
        setTreeStructuresetter();

    })
    set({
      EditorSocket: incomingSocket,
    });
  },
}));
