import axios from "axios"

const baseUrl = "https://api.github.com/users"
export const API = {
  getAllUsers: async () => axios.get(`${baseUrl}`),

  getUser: async () => axios.get(`${baseUrl}/Navruzbek2103`),

  getFollowers: async (followers) => axios.get(`${baseUrl}/Navruzbek2103/followers`),

  getRepos: async (repos) => axios.get(`${baseUrl}/Navruzbek2103/repos`),
}