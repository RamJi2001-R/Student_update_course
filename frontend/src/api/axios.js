import axios from "axios";

const API = axios.create({
  baseURL: process.env.NODE_ENV === 'production'
    ? "https://coursian.onrender.com/api"
    : "http://localhost:5000/api"
});

API.interceptors.request.use((req) => {
  const user = JSON.parse(localStorage.getItem("userInfo"));

  if (user?.token) {
    req.headers.Authorization = `Bearer ${user.token}`;
  }

  return req;
});

export default API;