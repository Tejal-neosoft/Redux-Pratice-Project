import * as api from '../api'
import { FETCH_POST, CREATE_POST, LIKE_POSTS, DELETE_POSTS, UPDATE_POSTS } from '../constants/constant'

// Action Creators == returns action always
export const getPosts = () => async (dispatch) => {
    console.log(api.fetchPosts())
    try {
        const { data } = await api.fetchPosts()
        dispatch({ type: FETCH_POST, payload: data });

    }
    catch (error) {
        console.log(error, "error in getposts")
    }

}
export const createPosts = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPosts(post)
        dispatch({ type: CREATE_POST, payload: data });
    }
    catch (error) {
        console.log(error.message)
    }

}
export const updatePosts = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePosts(id, post)
        dispatch({ type: UPDATE_POSTS, payload: data })
    }
    catch (error) {
        console.log(error.message)
    }
}

export const deletePosts = (id) => async (dispatch) => {
    try {
        await api.deletePosts(id)
        dispatch({ type: DELETE_POSTS, payload: id })
    }
    catch (error) {
        console.log(error.message)
    }
}

export const likePosts = (id) => async (dispatch) => {
    console.log(id)
    try {
        const { data } = await api.likePosts(id)
        console.log(data)
        dispatch({ type: LIKE_POSTS, payload: data })
    }
    catch (error) {
        console.log(error)
    }
}