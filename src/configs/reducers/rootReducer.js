import { combineReducers } from "redux";
import userReducer from "./userReducer";
import transactionReducer from './transactionReducer'
const rootReducers = combineReducers({
  user: userReducer,
  transaction: transactionReducer
});

export default rootReducers;
