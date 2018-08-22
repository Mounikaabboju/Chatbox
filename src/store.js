import { createStore, combineReducers } from "redux";
import { MessageReducer } from "./Reducer/MessageReducer";

const rootReducer = combineReducers({
  MessageReducer
});

const store = createStore(rootReducer);

export default store;
