import express from 'express'
import {createPost, getMemory} from '../controller/dataController.js'
const router = express.Router()
 
router.route('/').get(getMemory) 
router.route('/').post(createPost) 



export default router 