import { useParams } from "react-router-dom";
import Editor from "../components/molecules/EditorComponent/EditorComponent";
import EditorComponent from "../components/molecules/EditorComponent/EditorComponent";

export default function ProjectPlayground(){
    const {projectId} = useParams();
    console.log(projectId)

    return(
        <>
        Project Id :{projectId}
        <EditorComponent/>
        </>
    )
}