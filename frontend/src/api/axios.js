import axios from "axios";

const API = axios.create({
  baseURL: "https://student-update-course-1.onrender.com/api"
});

API.interceptors.request.use((req) => {
  const user = JSON.parse(localStorage.getItem("userInfo"));

  if (user?.token) {
    req.headers.Authorization = `Bearer ${user.token}`;
  }

  return req;
});

export default API;