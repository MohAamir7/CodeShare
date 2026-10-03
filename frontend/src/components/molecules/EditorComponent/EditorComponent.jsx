import Editor, { useMonaco } from "@monaco-editor/react";
import { theme } from "antd";
import React, { useEffect, useState } from "react";
import { useActiveFileTabStore } from "../../../store/ActiveFileStoreTab";
import { useEditorSocket } from "../../../store/EditorSocketStore";

export default function EditorComponent() {
  // const editorRef = useRef(null);
  // const monaco = useMonaco();
  const [editorState, setEditorState] = useState({
    theme: null,
  });

  const {EditorSocket} = useEditorSocket();
  const {activeFileTab, setActiveFileTab} = useActiveFileTabStore();


  EditorSocket?.on("readFilesSuccess", (data) => {
    console.log("Received file content:", data);
    setActiveFileTab(data.path, data.value);
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
    <div className="min-h-0 min-w-0 flex-1 overflow-hidden bg-[#1e1e1e]">
    {editorState.theme &&
    <Editor
      className="h-full w-full"
      height="90vh"
      defaultLanguage="javascript"
      defaultValue="Welcome to PlayGround"
      options={{
        fontSize: 18,
        fontFamily: "monospace",
      }}
      onMount={handleEditorTheme}
      value= {activeFileTab?.value?activeFileTab.value:"Welcome to PlayGround"}
    />
    }
    </div>
  );
}
