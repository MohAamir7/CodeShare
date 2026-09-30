import { useEffect } from "react";
import { ProjectTreeStore } from "../../store/projectTreeStroe.js";
import { TreeNode } from "../molecules/TreeNode/TreeNode.jsx";

export const TreeStucture = () => {
    // const projectId = ProjectTreeStore((state) => state.projectId);
    const {treeStructure,setTreeStructure} = ProjectTreeStore();

    useEffect(()=>{
        if(treeStructure){
            console.log(treeStructure)
        }else{
            setTreeStructure()
        }
    })

    // console.log("TreeStructure rendered", projectId);

    return (
        <aside>
            <h1>Tree Structure</h1>
            {/* <p>Project ID: {projectId}</p> */}
            <TreeNode folderName={treeStructure}/>
        </aside>
    );
};