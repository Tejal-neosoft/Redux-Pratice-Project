import { FETCH_POST, CREATE_POST, LIKE_POSTS, DELETE_POSTS, UPDATE_POSTS } from '../constants/constant'
export default (posts = [], action) => {
    switch (action.type) {

        case FETCH_POST:
            return action.payload;

        case CREATE_POST:
            return [...posts, action.payload];

        case UPDATE_POSTS:
        case LIKE_POSTS:
            return posts.map(post => post._id === action.payload._id ? action.payload : post)

        case DELETE_POSTS:
            return posts.filter(post => post._id !== action.payload)

        default:
            return posts
    }
}