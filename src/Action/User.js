import actions from "./ActionTypes";
import store from "../Store/store";
import userApi from "../Api/User";

const userAction = {
  saveUserCredentials: (data) => {
    store.dispatch((action) => {
      action({
        type: actions.SAVE_USER_CREDENTIALS,
        data: data
      });
    });
  },
  getUserProfile: (userId) => {
    store.dispatch((action) => {
      userApi.getUserDetails(userId).then((response) => {
        action({
          type: actions.GET_USER_DETAILS,
          data: response.data
        });
      }).catch((error) => {
        throw(error);
      });
      userApi.getUserPicture(userId).then((response) => {
        action({
          type: actions.GET_USER_PICTURE,
          data: response.data
        });
      }).catch((error) => {
        throw(error);
      });
    });
  },
  getUserStatistics: (userId) => {
    store.dispatch((action) => {
      userApi.getUserLikes(userId).then((response) => {
        action({
          type: actions.GET_USER_LIKES,
          data: response.data
        });
      }).catch((error) => {
        throw(error);
      });

      userApi.getUserFriends(userId).then((response) => {
        action({
          type: actions.GET_USER_FRIENDS,
          data: response.data
        });
      }).catch((error) => {
        throw(error);
      });
    });
  }
};

export default userAction;
