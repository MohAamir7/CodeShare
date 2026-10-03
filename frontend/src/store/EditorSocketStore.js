import { create } from 'zustand'

export const useEditorSocket = create((set) => ({
    EditorSocket: null,

    setEditorSocket: async (incomingSocket) => {
        set({
            EditorSocket: incomingSocket,
        })
    },
}))