import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:6969/api",
  headers: {
    common: {
      "Content-Type": "multipart/form-data",
    },
  },
});

async function getPersons() {
  const response = await apiClient.get("/persons");
  return response.data;
}

export default {
  getPersons,
};
