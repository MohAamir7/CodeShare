import { useEffect } from "react";
import { ProjectTreeStore } from "../../store/projectTreeStroe.js";
import { useParams } from "react-router-dom";


export const TreeStucture = () => {
    const { projectId } = useParams();
    const {
        treeStructure,
        treeProjectId,
        treeError,
        setTreeStructure,
    } = ProjectTreeStore();

    useEffect(() => {
        if (!projectId) return;

        setTreeStructure(projectId).catch((error) => {
            console.error("Unable to load project tree:", error);
        });
    }, [projectId, setTreeStructure]);

    return(
        <>
            <h1>Tree Structure</h1>
           
        </>
    )
}

// export default TreeStucture;