import { combineReducers } from "redux";
import userReducer from "./userReducer";
import transactionReducer from './transactionReducer'
import topUpReducer from "./topUpReducer";
const rootReducers = combineReducers({
  user: userReducer,
  transaction: transactionReducer,
  topUp: topUpReducer
});

export default rootReducers;
