import { useParams } from "react-router-dom";
import Editor from "../components/molecules/EditorComponent/EditorComponent";
import EditorComponent from "../components/molecules/EditorComponent/EditorComponent";
import { EditorButton } from "../components/atoms/EditorButton/EditorButton";
import TreeStucture from "../components/organism/TreeStructure";

export default function ProjectPlayground(){
    const {projectId} = useParams();
    console.log(projectId)

    return(
        <>
        Project Id :{projectId}
        <TreeStucture projectId={projectId}/>
        <EditorComponent/>
        <EditorButton isActive={false}/>
        <EditorButton isActive={true}/>
        </>
    )
}