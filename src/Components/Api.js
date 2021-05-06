import axios from "axios";

const api = axios.create({
  baseURL: "https://portpolio-5e51c-default-rtdb.firebaseio.com/",
});

export const Api = {
  resume: () => api.get("resume.json"),
};
