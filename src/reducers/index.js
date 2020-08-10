import { combineReducers } from "redux";
import heroReducer from "./heroReducer";

const rootReducer = combineReducers({
  heroReducer: heroReducer,
});

export default rootReducer;
