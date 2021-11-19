import defaultAxios from "axios";

export const axios = defaultAxios.create({
  baseURL: "https://todo-redux-saga-server.herokuapp.com/",
  headers: { "Content-Type": "application/json" },
});