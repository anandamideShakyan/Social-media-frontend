import axios from "axios"
const API = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}` })
API.interceptors.request.use((req) => {
	if (localStorage.getItem("profile")) {
		req.headers.Authorization = `Bearer ${
			JSON.parse(localStorage.getItem("profile")).token
		}`
	}

	return req
})
export const getUser = (id) => API.get(`/user/${id}`)
export const getUsers = () => API.get(`/user`)

export const updateUser = (id, data) => API.put(`/user/${id}`, data)

export const followUser = (id, data) => API.put(`/user/${id}/follow`, data)
export const unfollowUser = (id, data) =>
	axios.put(`/user/${id}/unfollow`, data)
