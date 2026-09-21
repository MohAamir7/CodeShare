import express from 'express'
import Createproject from '../../controller/projectController.js';


const router = express.Router();

router.post('/',Createproject)

export default router;