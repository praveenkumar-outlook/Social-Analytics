import actions from "../Action/ActionTypes";

const initialState = {
  userId: "",
  accessToken: "",
  userProfile: ""
};

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case actions.SAVE_USER_CREDENTIALS:
      return {
        ...state,
        userId: action.data.userId,
        accessToken: action.data.accessToken
      };
    case actions.GET_USER_PROFILE:
      return {
        ...state,
        userProfile: {
          ...action.data,
          picture: action.data.picture.data.url
        }
      };
    default:
      return state;
  }
};

export default userReducer;
