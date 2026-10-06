import { useEffect } from "react";
import { ProjectTreeStore } from "../../store/projectTreeStroe.js";
import { TreeNode } from "../molecules/TreeNode/TreeNode.jsx";
import { useFileContextMenuStore } from "../../store/fileContextMenuStore.js";
import {FileContextMenu} from "../molecules/ContextMenu/FileContextMenu.jsx";
export const TreeStucture = () => {
    // const projectId = ProjectTreeStore((state) => state.projectId);
    const { treeStructure, setTreeStructure } = ProjectTreeStore();

    const {
        file,
        isOpen: isFileContextOpen,
        x: fileContextX,
        y: fileContextY,
    } = useFileContextMenuStore();

    useEffect(() => {
        if (treeStructure) {
            console.log(treeStructure);
        } else {
            setTreeStructure();
        }
    }, [treeStructure, setTreeStructure]);

    // console.log("TreeStructure rendered", projectId);

    return (
        <aside>
            <h1>Tree Structure</h1>
            {/* <p>Project ID: {projectId}</p> */}
            {isFileContextOpen && fileContextX && fileContextY && (
            <FileContextMenu x={fileContextX} y={fileContextY} path={file} />
            )}
            <TreeNode folderName={treeStructure} />
        </aside>
    );
};