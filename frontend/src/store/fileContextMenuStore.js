import { create } from "zustand";

export const useFileContextMenuStore = create((set) => ({
    x: null,
    y: null,
    file: null,
    isOpen: false,

    setX: (incomingX) => {
        set({ x: incomingX });
    },
    setY: (incomingY) => {
        set({ y: incomingY });
    },
    setFile: (incomingFile) => {
        set({ file: incomingFile });
    },
    setIsOpen: (isOpen) => {
        set({ isOpen: isOpen });
    },
}));

