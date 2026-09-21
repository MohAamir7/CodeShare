import express from 'express'

import pingCheck from '../../controller/pingController.js'
import project from './projects.js'

const router = express.Router();

router.use('/ping',pingCheck);
router.use('/projects',project)

export default router;