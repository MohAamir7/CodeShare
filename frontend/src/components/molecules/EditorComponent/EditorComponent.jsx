import Editor from '@monaco-editor/react';
import React, { useRef } from 'react';


export default function EditorComponent(){
    const editorRef = useRef(null);
    function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

    return(
        <Editor
        height="90vh"
        defaultLanguage="javascript"
        defaultValue="// some comment"
        onMount={handleEditorDidMount}
      />
    )
}