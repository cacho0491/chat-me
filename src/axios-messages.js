import axios from "axios";

const instance = axios.create({
  baseURL: "https://chat-me-36042.firebaseio.com",
});

export default instance;
