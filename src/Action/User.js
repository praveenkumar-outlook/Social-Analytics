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
      userApi.getUserProfile(userId).then((response) => {
        action({
          type: actions.GET_USER_PROFILE,
          data: response.data
        })
      }).catch((error) => {
        throw(error);
      });
    });
  }
};

export default userAction;
