import express from 'express';
import cors from 'cors';

import { PORT } from './src/config/serverConfig.js';
import apiRoutes from './src/routes/apiRoutes.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/api', apiRoutes);

app.get('/ping', (req, res) => {
  return res.json({ message: 'pong' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});