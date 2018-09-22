import axios from "axios";
const api = "https://graph.facebook.com/v3.1";

const userApi = {
  getUserDetails: (userId) => {
    return axios.get(`${api}/${userId}?fields=name,birthday,gender,hometown,email,link,location` +
      `&access_token=${localStorage.getItem("ACCESS_TOKEN")}`);
  },
  getUserPicture: (userId) => {
    return axios.get(`${api}/${userId}/picture?height=100&width=100&redirect=false` +
      `&access_token=${localStorage.getItem("ACCESS_TOKEN")}`);
  },
  getUserLikes: (userId) => {
    return axios.get(`${api}/${userId}?fields=favorite_athletes,favorite_teams,` +
      `games,likes,movies,music,television&access_token=${localStorage.getItem("ACCESS_TOKEN")}`);
  },
  getUserFriends: (userId) => {
    return axios.get(`${api}/${userId}?fields=friends,groups,payment_pricepoints,sports,languages` +
      `&access_token=${localStorage.getItem("ACCESS_TOKEN")}`);
  }
};

export default userApi;
