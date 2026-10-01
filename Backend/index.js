import express from 'express';
import cors from 'cors';
import { Server } from 'socket.io';
import http from 'http';

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

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});