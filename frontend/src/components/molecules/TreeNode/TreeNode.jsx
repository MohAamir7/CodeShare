import { useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import {io} from "socket.io-client";
import { useEditorSocket } from "../../../store/EditorSocketStore";
import { useFileContextMenuStore } from "../../../store/fileContextMenuStore";

export const TreeNode = ({ folderName }) => {
  const [visibility, setVisibility] = useState({});

  const {EditorSocket} = useEditorSocket();
  const {
    setX:fileContextX,
    setY:fileContextY,
    setFile,
    setIsOpen:isFileContextOpen,
  } = useFileContextMenuStore();

  if (!folderName) {
    return null;
  }

  function handleDoubleClick(folderName) {
    console.log("Double clicked on folder:", folderName);
    EditorSocket.emit("readFiles", { pathTofileFolder: folderName.path });
  }

  function handleContextMenu(event, folderName) {
    event.preventDefault();
    console.log("Right clicked on folder:", folderName.path);
    // Here you can implement the logic to show a context menu
    setFile(folderName.path);
    fileContextX(event.clientX);
    fileContextY(event.clientY);
    isFileContextOpen(true);
  }

  function toggleVisibility(name) {
    setVisibility((currentVisibility) => ({
      ...currentVisibility,
      [name]: !currentVisibility[name],
    }));
  }

  return (
    <>
      {Array.isArray(folderName.children) ? (
        <button
          onClick={() => toggleVisibility(folderName.name)}
          className="flex w-full items-center gap-1 rounded px-1 py-1 text-left text-[13px] text-[#cccccc] transition-colors hover:bg-[#2a2d2e] focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#007fd4]"
        >
          {visibility[folderName.name] ? (
            <IoIosArrowDown aria-hidden="true" className="shrink-0 text-[#858585]" />
          ) : (
            <IoIosArrowForward aria-hidden="true" className="shrink-0 text-[#858585]" />
          )}
          <span className="truncate">{folderName.name}</span>
        </button>
      ) : (
        <p className="flex items-center gap-2 rounded px-2 py-1 text-[13px] text-[#cccccc] hover:bg-[#2a2d2e]" onDoubleClick={()=>handleDoubleClick(folderName)} onContextMenu={(event) => handleContextMenu(event, folderName)}>
          <span aria-hidden="true" className="text-[10px] text-[#858585]">◇</span>
          <span className="truncate">{folderName.name}</span>
        </p>
      )}
      {visibility[folderName.name] &&
        Array.isArray(folderName.children) &&
        <div className="ml-2 border-l border-[#3c3c3c] pl-2 cursor-pointer" >
          {folderName.children.map((child) => (
            <TreeNode folderName={child} key={child.path ?? child.name}  />
          ))}
        </div>}
    </>
  );
};
