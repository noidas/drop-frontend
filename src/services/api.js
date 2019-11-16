import axios from "axios";

const api = axios.create({
  baseURL: "https://omni6backend.herokuapp.com"
});

export default api;
