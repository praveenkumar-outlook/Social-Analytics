import {createStore, applyMiddleware} from "redux";
import rootReducer from "../Reducer/reducer";
import thunk from "redux-thunk";

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

store.subscribe(() => {
  localStorage.setItem('ACCESS_TOKEN', store.getState().user.accessToken);
});

export default store;
