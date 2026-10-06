
import {useFileContextMenuStore} from "../../../store/fileContextMenuStore.js";
import {useEditorSocket} from "../../../store/EditorSocketStore.js";

export const FileContextMenu =({
    x,
    y,
    path
})=>{

    const {setIsOpen} = useFileContextMenuStore();
    const {EditorSocket} = useEditorSocket();
    console.log("FileContextMenu rendered",x,y,path);

    function handleDeleteFile(e){
        e.preventDefault();
        console.log("Delete file clicked",path);
        EditorSocket?.emit("deleteFiles",{
            pathTofileFolder:path
        })
    }
    return(
        <div onMouseLeave={()=>{
            console.log("Mouse left");
            setIsOpen(false);
        }}
            role="menu"
            className="fixed z-50 min-w-40 rounded-md border border-[#454545] bg-[#252526] p-1 shadow-xl shadow-black/40"
            style={{left:x,top:y}}
        >
            <button
                role="menuitem"
                className="block w-full rounded-sm px-3 py-1.5 text-left text-[13px] text-[#cccccc] hover:bg-[#04395e] focus:bg-[#04395e] focus:outline-none"
            onClick={handleDeleteFile}>
                Delete File
            </button>
            <button
                role="menuitem"
                className="block w-full rounded-sm px-3 py-1.5 text-left text-[13px] text-[#cccccc] hover:bg-[#04395e] focus:bg-[#04395e] focus:outline-none"
            >
                Rename File
            </button>
        </div>
    )
}