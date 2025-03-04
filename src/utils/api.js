import axios from "axios";

const API = axios.create({
  // baseURL: process.env.REACT_APP_BASE_URL ||  process.env.REACT_APP_Production_URL
  baseURL: "https://ticket-booking-backend-production-3958.up.railway.app/api"
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token"); // Get token from localStorage
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;