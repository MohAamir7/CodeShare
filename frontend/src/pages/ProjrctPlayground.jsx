import EditorComponent from "../components/molecules/EditorComponent/EditorComponent";
import { EditorButton } from "../components/atoms/EditorButton/EditorButton";
import {TreeStucture} from "../components/organism/TreeStructure";

export default function ProjectPlayground(){
    return(
        <div className="flex h-screen w-full overflow-hidden bg-[#1e1e1e] text-left text-slate-200">
        {/* Project Id :{projectId} */}
        <TreeStucture/>
        <div className="flex min-w-0 flex-1 flex-col-reverse">
            <EditorComponent/>
            <div className="flex h-9 shrink-0 items-center border-t border-[#333] bg-[#252526]">
                <EditorButton isActive={false}/>
                <EditorButton isActive={true}/>
            </div>
        </div>
        </div>
    )
}