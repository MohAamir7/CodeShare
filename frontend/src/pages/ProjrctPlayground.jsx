import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProjectTreeStore } from "../store/projectTreeStroe";

export default function ProjectPlayground() {

    const { projectId: projectIdFromUrl } = useParams();

    const projectId = ProjectTreeStore(
        (state) => state.projectId
    );

    const setProjectId = ProjectTreeStore(
        (state) => state.setProjectId
    );

    useEffect(() => {

        if (!projectIdFromUrl) return;

        setProjectId(projectIdFromUrl);

    }, [projectIdFromUrl, setProjectId]);

    return (
        <div>
            URL Project ID: {projectIdFromUrl}
            <br />
            Zustand Project ID: {projectId}
        </div>
    );
}