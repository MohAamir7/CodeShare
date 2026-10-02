import { create } from 'zustand'

export const EditorSocket = create((set) => ({
    EditorSocket: null,

    setEditorSocket: async (incomingSocket) => {
        set({
            EditorSocket: incomingSocket,
        })
    },
}))