import { useEffect } from "react";
import useProjectTree from "../../hoonks/apis/queries/useProjectTree.js";
import { ProjectTreeStore } from "../../store/projectTreeStroe.js";
import { useParams } from "react-router-dom";


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
        <>
            <h1>Tree Structure</h1>
        </>
    )
}

// export default TreeStucture;