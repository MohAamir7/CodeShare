import Editor, { useMonaco } from "@monaco-editor/react";
import { theme } from "antd";
import React, { useEffect, useState } from "react";
import { useActiveFileTabStore } from "../../../store/ActiveFileStoreTab";
import { useEditorSocket } from "../../../store/EditorSocketStore";

export default function EditorComponent() {
  // const editorRef = useRef(null);
  // const monaco = useMonaco();
  let timerID = null;
  const [editorState, setEditorState] = useState({
    theme: null,
  });

  const {EditorSocket} = useEditorSocket();
  const {activeFileTab} = useActiveFileTabStore();


 
  async function downloadTheme() {
    const res = await fetch("/Dracula.json");

    const data = await res.json();
    console.log(data.base);
    setEditorState({ ...editorState, theme: data });
  }

  function handleChange(value) {
    
    if(timerID != null){
      clearTimeout(timerID);
    }

    timerID = setTimeout(() => {
      console.log("Sending update for file:", activeFileTab.path,value);
      EditorSocket.emit("writeFiles", {
        pathTofileFolder: activeFileTab.path,
        data: value,
      });
    }, 2000);
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
      onChange={handleChange}
    />
    }
    </div>
  );
}
