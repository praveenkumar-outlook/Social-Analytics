import axios from "axios";
const api = "https://graph.facebook.com/v3.1";

const userApi = {
  getUserProfile: (userId) => {
    return axios.get(`${api}/${userId}?fields=name,picture` +
      `&access_token=${localStorage.getItem("ACCESS_TOKEN")}`);
  },
  getUserLikes: (userId) => {
    return axios.get(`${api}/${userId}?fields=favorite_athletes,favorite_teams,` +
      `games,likes,movies,music,television&access_token=${localStorage.getItem("ACCESS_TOKEN")}`);
  },
  getUserFriends: (userId) => {
    return axios.get(`${api}/${userId}?fields=friends,groups` +
      `&access_token=${localStorage.getItem("ACCESS_TOKEN")}`);
  }
};

export default userApi;
