import { useEffect } from "react";
import useProjectTree from "../../hoonks/apis/queries/useProjectTree.js";
import { ProjectTreeStore } from "../../store/projectTreeStroe.js";
import { useParams } from "react-router-dom";
import { TreeNode } from "../molecules/TreeNode/TreeNode.jsx";


export const TreeStucture =()=>{
    const {treeStructure,setTreeStructure} = ProjectTreeStore();
    const {projectId} = useParams();

    useEffect(()=>{
        if (treeStructure) {
            console.log("tree Path",treeStructure);
        } else{
            setTreeStructure(projectId);
        }
    },[treeStructure, setTreeStructure, projectId]);

    return(
        <aside className="h-full w-64 shrink-0 overflow-auto border-r border-[#333] bg-[#252526] px-3 py-2 text-left">
            <h1 className="m-0 border-b border-[#333] pb-2 text-sm font-semibold tracking-normal text-slate-200">Tree Structure</h1>
            <TreeNode folderName={treeStructure}/>
        </aside>
    )
}

// export default TreeStucture;