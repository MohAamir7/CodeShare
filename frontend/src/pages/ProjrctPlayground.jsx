import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProjectTreeStore } from "../store/projectTreeStroe";
import { TreeStucture } from "../components/organism/TreeStructure";
import EditorComponent from "../components/molecules/EditorComponent/EditorComponent";
import { EditorButton } from "../components/atoms/EditorButton/EditorButton";


export default function ProjectPlayground() {

    const { projectId: projectIdFromUrl } = useParams();

    const{projectId,setProjectId} = ProjectTreeStore()

    useEffect(() => {

        if (!projectIdFromUrl) return;

        setProjectId(projectIdFromUrl);

    }, [projectIdFromUrl, setProjectId]);

    return (
        <div className="relative left-1/2 flex h-screen w-screen -translate-x-1/2 flex-col overflow-hidden bg-[#1e1e1e] text-left text-[#cccccc]">
            <header className="flex h-9 shrink-0 items-center border-b border-[#181818] bg-[#323233] px-4 text-xs font-medium text-[#cccccc]">
                CodeShare
            </header>
            <main className="flex min-h-0 flex-1">
                <div className="w-64 max-w-[40vw] shrink-0 overflow-y-auto border-r border-[#181818] bg-[#252526] px-4 py-4 [&_h1]:mb-4 [&_h1]:mt-0 [&_h1]:text-xs [&_h1]:font-semibold [&_h1]:tracking-wide [&_h1]:text-[#cccccc] [&_p]:text-xs [&_p]:text-[#858585]">
                    <TreeStucture  />
                </div>
                <section className="flex min-h-0 min-w-0 flex-1 flex-col">
                    <div className="flex h-9 shrink-0 items-stretch border-b border-[#252526] bg-[#252526]">
                        <EditorButton isActive={false} />
                        <EditorButton isActive={true} />
                    </div>
                    <div className="flex min-h-0 min-w-0 flex-1 overflow-hidden">
                        <EditorComponent />
                    </div>
                </section>
            </main>
        </div>
    );
}