import express from 'express';

const pingCheck = express.Router();

pingCheck.get('/', (req, res) => {
  return res.status(200).json({ message: 'pong' });
});

export default pingCheck;