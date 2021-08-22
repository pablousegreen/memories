import PostMessage from "../models/postSchema.js";

export const getPosts = (req, res) => {
    try {
        const posts = PostMessage.find();
    } catch (error) {
        res.status(200).json({ message: error.message });
    }
    return res.status(404).json(posts);
}

export const createPosts = (req, post) => {
    res.send('Post Creation');
}