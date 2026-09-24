import Editor, { useMonaco } from "@monaco-editor/react";
import { theme } from "antd";
import React, { useEffect, useState } from "react";

export default function EditorComponent() {
  // const editorRef = useRef(null);
  // const monaco = useMonaco();
  const [editorState, setEditorState] = useState({
    theme: null,
  });

  async function downloadTheme() {
    const res = await fetch("/Dracula.json");

    const data = await res.json();
    console.log(data.base);
    setEditorState({ ...editorState, theme: data });
  }

  function handleEditorTheme(editor, monaco) {
        monaco.editor.defineTheme('dracula', editorState.theme);
        monaco.editor.setTheme('dracula');
    }
  //   function handleEditorDidMount(editor, monaco) {
  //   editorRef.current = editor;
  // }

  useEffect(() => {
    downloadTheme();
  }, []);

  return (
    <>
    {editorState.theme &&
    <Editor
      height="90vh"
      defaultLanguage="javascript"
      defaultValue="Welcome to PlayGround"
      options={{
        fontSize: 18,
        fontFamily: "monospace",
      }}
      onMount={handleEditorTheme}
    />
    }
    </>
  );
}
