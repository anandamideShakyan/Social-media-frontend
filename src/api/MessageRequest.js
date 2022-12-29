import axios from "axios"

const API = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}` })

export const addMessage = (message) => API.post(`/message`, message)
export const getMessages = (id) => API.get(`/message/${id}`)
