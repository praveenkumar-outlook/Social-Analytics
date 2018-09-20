import axios from "axios";
const api = "https://graph.facebook.com/v3.1";

const userApi = {
  getUserProfile: (userId) => {
    return axios.get(`${api}/${userId}?fields=name,picture&access_token=${localStorage.getItem("ACCESS_TOKEN")}`);
  }
};

export default userApi;
