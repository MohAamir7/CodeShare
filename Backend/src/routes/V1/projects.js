import express from 'express'
import {Createproject, GetprojectTree} from '../../controller/projectController.js';


const router = express.Router();
router.get('/:projectId/tree',GetprojectTree);

router.post('/',Createproject)
// router.get('/:projectId/tree',GetprojectTree);

export default router;