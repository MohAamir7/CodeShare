import useProjectTree from "../../hoonks/apis/queries/useProjectTree.js";


function TreeStucture({ projectId }){

    const { data, isLoading, isError, error } = useProjectTree(projectId)
    console.log(data);

    if (isLoading) return <p>Loading project tree...</p>
    if (isError) return <p>Unable to load project tree: {error.message}</p>

    return(
        <>
            <h1>Tree Structure</h1>
            {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
        </>
    )
}

export default TreeStucture;