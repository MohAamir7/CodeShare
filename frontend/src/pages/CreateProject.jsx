
import { useState } from 'react'
import useProject from '../hoonks/apis/mutations/useProject'

function CreateProject(){
    const {CreateProjectMutation} = useProject();
    // const [clicked, setClicked] = useState(false);

    async function handleCreateProject(){
        // setClicked(true);
        console.log("create project api trigger");
        try {
            await CreateProjectMutation();
            console.log("Now we should redirect to the editor");
        } catch (error) {
            console.error("Error occurred while creating the project:", error);
        }
    }
 
    return(
        <>
            <button type="button" onClick={handleCreateProject}>
                Create Project
            </button>
            {/* {clicked && <p>Button clicked. Check the browser console.</p>} */}
        </>
    )
}

export default CreateProject;