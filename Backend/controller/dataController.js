import mongoose from 'mongoose';
import PostModel from '../models/dataSchema.js';
export const getMemory = (async (req, res) => {
    try {
        const postMessages = await PostModel.find();
        res.send(postMessages);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
        console.log(error)
    }
})
export const createPost = (async (req, res) => {
    const { title, message, selectedFile, creator, tags } = req.body;
    const newPostMessage = new PostModel({ title, message, selectedFile, creator, tags })
    try {
        await newPostMessage.save();

        res.status(201).json(newPostMessage);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
})
export const updatePost = (async (req, res) => {
    try {
        const { id: _id } = req.params
        const post = req.body
        if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No Post found")
        const updatedData = await PostModel.findByIdAndUpdate(_id, post, { new: true })
        res.json(updatedData)

    }
    catch (error) {
        console.log(error)
    }
})
export const deletePost = (async (req, res) => {
    try {
        const { id } = req.params
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No Post found")
        await PostModel.findByIdAndRemove(id)
        res.json('Data Deleted')

    }
    catch (error) {
        console.log(error)
    }
})

export const likePost = (async (req, res) => {
    try {
        const { id } = req.params

        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No Post found")
        const likeupdatedData = await PostModel.findByIdAndUpdate(id, { $inc: { likeCount: 1 } }, { new: true })
        res.json(likeupdatedData)

    }
    catch (error) {
        console.log(error)
    }
})