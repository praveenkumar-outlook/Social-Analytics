import Api from "../Api/Friends";
import actions from "./ActionTypes";
import store from "../Store/store";

const friendsActions = {
  getAllFriends: () => {
    store.dispatch((action) => {
      Api.getAllFriends().then((friends) => {
        action({
          type: actions.GET_ALL_FRIENDS,
          data: friends.data
        });
      }).catch((error) => {
        throw(error);
      });
    });
  }
};

export default friendsActions;
