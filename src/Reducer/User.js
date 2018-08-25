import actions from "../Action/ActionTypes";

const initialState = {
  userId: "",
  accessToken: ""
};

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case actions.SAVE_USER_CREDENTIALS:
      return {
        ...state,
        userId: action.data.userId,
        accessToken: action.data.accessToken
      };
    default:
      return state;
  }
};

export default userReducer;
