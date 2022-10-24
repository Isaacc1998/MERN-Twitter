import { combineReducers } from "redux";
import session from "./session_reducer";
import error_reducer from "./error_reducer";

const RootReducer = combineReducers({
  session,
  errors: error_reducer,
});

export default RootReducer;
