import express from 'express';
import cors from 'cors';
import { Server } from 'socket.io';
import http from 'http';
import chokidar from 'chokidar';
import { handleEditorEvents } from './src/socketHandler/editorHandlers.js';

import { PORT } from './src/config/serverConfig.js';
import apiRoutes from './src/routes/apiRoutes.js';

const app = express();
const server = http.createServer(app);
const io = new Server(server,
  {
    cors:{
      origin: '*',
      methods: ['GET','POST','PUT','DELETE'],
    }
  }
);

io.on('connection',(socket)=>{
  console.log(`User connected: ${socket.id}`);
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/api', apiRoutes);

app.get('/ping', (req, res) => {
  return res.json({ message: 'pong' });
});

const editorNamespace = io.of('/editor');
editorNamespace.on('connection', (socket) => {
  console.log(`User connected to editor namespace: ${socket.id}`);

  const projectId = socket.handshake.query.projectId;
  console.log(`Project ID: ${projectId}`);

  if(projectId) {
    var watcher = chokidar.watch(`./projects/${projectId}`, {
      ignored:(path)=> path.includes('node_modules') || path.includes('.git'),
      awaitWriteFinsh:{
        stabilityThreshold: 2000,
      },
      ignoreInitial:true,
    });
    watcher.on('all',(event,path)=>{
      console.log(`File ${event} at path: ${path}`);
      socket.emit('file-changed',{event,path});
    });
  }

   handleEditorEvents(socket,editorNamespace);
});


server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});