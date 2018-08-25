import actions from "./ActionTypes";
import store from "../Store/store";

const userAction = {
  saveUserCredentials: (data) => {
    store.dispatch((action) => {
      action({
        type: actions.SAVE_USER_CREDENTIALS,
        data: data
      });
    });
  }
};

export default userAction;
