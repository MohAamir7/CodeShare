import { ProjectTreeStore } from "../../store/projectTreeStroe.js";

export const TreeStucture = () => {
    const projectId = ProjectTreeStore((state) => state.projectId);

    console.log("TreeStructure rendered", projectId);

    return (
        <aside>
            <h1>Tree Structure</h1>
            <p>Project ID: {projectId}</p>
        </aside>
    );
};