import axios from "axios";

let token = localStorage.getItem("token");
token = token && token.replace(/['"]+/g, "");

const baseUrl = "http://localhost:6969";

export const publicRequest = axios.create({
  baseURL: baseUrl,
});

export const userRequest = axios.create({
  baseURL: baseUrl,
  headers: { authorization: `Bearer ${token}` },
});