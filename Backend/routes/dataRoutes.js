import express from 'express';
import { createPost, getMemory, updatePost, deletePost, likePost } from '../controller/dataController.js';
const router = express.Router()

router.route('/').get(getMemory)
router.route('/').post(createPost)
router.route('/:id').patch(updatePost).delete(deletePost)
router.route('/:id/likepost').patch(likePost)


export default router  