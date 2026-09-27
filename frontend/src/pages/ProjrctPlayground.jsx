import EditorComponent from "../components/molecules/EditorComponent/EditorComponent";
import { EditorButton } from "../components/atoms/EditorButton/EditorButton";
import {TreeStucture} from "../components/organism/TreeStructure";

export default function ProjectPlayground(){
    return(
        <>
        {/* Project Id :{projectId} */}
        <TreeStucture/>
        <EditorComponent/>
        <EditorButton isActive={false}/>
        <EditorButton isActive={true}/>
        </>
    )
}