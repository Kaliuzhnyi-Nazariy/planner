import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://back-for-planner.onrender.com/api",
});

export default axiosInstance;
