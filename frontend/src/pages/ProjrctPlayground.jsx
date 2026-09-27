import { useParams } from "react-router-dom";
import Editor from "../components/molecules/EditorComponent/EditorComponent";
import EditorComponent from "../components/molecules/EditorComponent/EditorComponent";
import { EditorButton } from "../components/atoms/EditorButton/EditorButton";
import {TreeStucture} from "../components/organism/TreeStructure";
import { ProjectTreeStore } from "../store/projectTreeStroe";
import { useEffect } from "react";

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