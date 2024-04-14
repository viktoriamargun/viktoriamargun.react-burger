import { combineReducers } from "redux";
import fetchData from "./ingredients/fetch-data";
import tabSlice from "./ingredients/tabs/tab-slice";

const rootReducer = combineReducers({
  ingredients: fetchData,
  tabs: tabSlice,
});

export default rootReducer;