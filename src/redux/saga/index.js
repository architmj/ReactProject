import { takeEvery } from "redux-saga/effects";

import { types, logIn, forgetPassword ,changePassword} from "../actiontype";
import { fetchUser } from "./dashboard";
import { adminLogin, adminForgetPassword ,adminChangePassword} from "./auth";

export default function* mySaga() {
  yield takeEvery(types.GET_USERS_COUNT_INITIATE, fetchUser);
  yield takeEvery(logIn.POST_LOGIN_INITIATE, adminLogin);
  yield takeEvery(forgetPassword.POST_FORGET_PASSWORD_INITIATE, adminForgetPassword);
}
