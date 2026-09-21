import express from 'express'
import V1 from './V1/index.js'



const router = express.Router();

router.use('/v1',V1);

export default router;