import dataModel from '../modals/dataSchema.js'
export const getMemory = ( async (req,res)=>{
    try{
        const dataMessage = await dataModel.find();
        res.send(dataMessage);
    }
    catch(error){
        res.status(404).json({message: error.message});
        console.log(error)
    }
})

export const createPost = (async (req, res) => {
    const { title, message, selectedFile, creator, tags } = req.body;    
    const newPostMessage = new dataModel({ title, message, selectedFile, creator, tags })
    try {
        await newPostMessage.save();

        res.status(201).json(newPostMessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
})
