import { combineReducers } from "redux";
import { dashboard } from "./dashboard";
import { login, forgetpassword, changePass, logout } from "./auth";
// import { users } from "./users";

const rootReducer = () => ({
  dashboard,
  login,
  forgetpassword,
  changePass,
  logout,
});

export default rootReducer;
