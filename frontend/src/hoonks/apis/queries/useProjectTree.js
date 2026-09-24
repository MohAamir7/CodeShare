import { useQuery } from "@tanstack/react-query";
import { GetProjectTree } from "../../../apis/projects.js";

export default function useProjectTree(projectId){
    const {isLoading,isError,data,error} = useQuery({
        queryKey: ["projectTree", projectId],
        queryFn: () => GetProjectTree(projectId),
        enabled: Boolean(projectId),
    })

    return{
        isLoading,
        isError,
        data,
        error
    }
}