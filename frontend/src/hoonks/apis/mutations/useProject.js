import { useMutation } from "@tanstack/react-query";
import { CreateProject } from "../../../apis/projects";

export default function useProject(){
    const {mutateAsync,isPending,Success,error} = useMutation({
        mutationFn:CreateProject,
        onSuccess:(data)=>{
            console.log("Project successfully created",data)
        },
        onError:()=>{
            console.log("error occur");
        }
    })

    return{
        CreateProjectMutation:mutateAsync,
        isPending,
        Success,
        error
    }


}