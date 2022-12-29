import axios from "axios"
const API = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}` })
export const getTimelinePosts = (id) => API.get(`/post/${id}/timeline`, id)
export const likePost = (id, user_id) =>
	API.post(`/post/${id}/like`, { userId: user_id })
