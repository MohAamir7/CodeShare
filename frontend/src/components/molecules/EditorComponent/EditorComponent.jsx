import Editor from "@monaco-editor/react";
import React, { useRef } from "react";

export default function EditorComponent() {
  const editorRef = useRef(null);

  async function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;

    const res = await fetch("/Dracula.json");
    if (!res.ok) {
      throw new Error(`Failed to load Dracula.json: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    monaco.editor.defineTheme("dracula", data);
    monaco.editor.setTheme("dracula");
  }

  return (
    <Editor
      height="90vh"
      defaultLanguage="javascript"
      defaultValue="Welcome to PlayGround"
      options={{
        fontSize: 18,
        fontFamily: "monospace",
      }}
      onMount={handleEditorDidMount}
    />
  );
}
