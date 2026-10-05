import fs from 'fs/promises'

export const handleEditorEvents = (socket,editorNamespace)=>{
    socket.on('writeFiles',async({data,pathTofileFolder})=>{
        console.log(`Writing files at path: ${pathTofileFolder}`);
        try {
            const res = await fs.writeFile(pathTofileFolder,data);
            console.log(`File written successfully at path: ${pathTofileFolder}`);
            editorNamespace.emit("writeFilesSuccess",{
                data:"File written successfully",
                path:pathTofileFolder,
            });    
        } catch (error) {
            console.log("Error writing the file",error);
            editorNamespace.emit("error",{
                data:"Error writing the file"
            })    
        }
    });

    socket.on('createFiles',async({pathTofileFolder})=>{
        const isAlreadyExists = await fs.access(pathTofileFolder);
        if(isAlreadyExists){
            console.log(`File already exists at path: ${pathTofileFolder}`);
            socket.emit("error",{
                data:"File already exists"
            });
            return;
        }
        try{
            const res = await fs.writeFile(pathTofileFolder,"");
            console.log(`File created successfully at path: ${pathTofileFolder}`);
        } catch (error) {
            console.log("Error creating the file",error);
            socket.emit("error",{
                data:"Error creating the file"
            })
        }
    });

    socket.on('readFiles',async({pathTofileFolder})=>{
        // console.log(`Reading files at path: ${pathTofileFolder}`);
        try {
            const res = await fs.readFile(pathTofileFolder)
            // console.log(res.toString());
            socket.emit("readFilesSuccess",{
                value:res.toString(),
                path:pathTofileFolder,
            });
        } catch (error) {
            console.log("Error reading the file",error);
            socket.emit("error",{
                data:"Error reading the file"
            })
        }
    });

    socket.on('deleteFiles',async({pathTofileFolder})=>{
        console.log(`Deleting files at path: ${pathTofileFolder}`);
        try {
            const res = await fs.unlink(pathTofileFolder);
            console.log(`File deleted successfully at path: ${pathTofileFolder}`);
        } catch (error) {
            console.log("Error deleting the file",error);
            socket.emit("error",{
                data:"Error deleting the file"
            });
        }
    });
    socket.on('createFolder',async({pathTofileFolder})=>{
        console.log(`Creating folder at path: ${pathTofileFolder}`);    
        try {
            const res = await fs.mkdir(pathTofileFolder);
            console.log(`Folder created successfully at path: ${pathTofileFolder}`);
        } catch (error) {
            console.log("Error creating the folder",error);
            socket.emit("error",{
                data:"Error creating the folder"
            });
        }
    });

    socket.on('deleteFolder',async({pathTofileFolder})=>{
        console.log(`Deleting folder at path: ${pathTofileFolder}`);
        try {
            const res = await fs.rmdir(pathTofileFolder,{recursive:true});
            console.log(`Folder deleted successfully at path: ${pathTofileFolder}`);
        } catch (error) {
            console.log("Error deleting the folder",error);
            socket.emit("error",{
                data:"Error deleting the folder"
            });
        }

    });
};