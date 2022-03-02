import axios from 'axios'
 
const URL = 'http://localhost:5000/data';

export const fetchPosts = () => axios.get(URL);

export const createPosts = (newPosts) =>axios.post(URL,newPosts); 