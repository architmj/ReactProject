// import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
// import {
//   postAdminLoginSuccess,
//   postAdminLoginFailure,
//   postForgetPasswordSuccess,
//   postForgetPasswordFailure,
//   // changePasswordSuccess,
//   // changePasswordFailure,
//   logoutSuccess,
//   logoutFailure,
// } from "../action/auth";
// import { loginApi, forgetPassword, logoutApi } from "../../axiosFile";

// export function* adminLogin(action) {
//   console.log("this is middleware = ", action);
//   try {
//     const response = yield call(loginApi, action.payload);
//     console.log("this is result = ", response.data.data.token);
//     // console.log(response);
//     localStorage.setItem("credentials", response.data.data.token);
//     action.payload.navigation("/dashboard");
//     yield put(postAdminLoginSuccess());
//   } catch (e) {
//     console.log("this is error = ", e);
//     yield put(postAdminLoginFailure(e));
//   }
// }

// ///////////forget password api////////////

// export function* adminForgetPassword(action) {
//   console.log("this is middleware = ", action);
//   try {
//     const response = yield call(forgetPassword, action.payload);
//     console.log("this is result = ", response.data.data.token);
//     localStorage.setItem("credentials", response.data.data.token);
//     action.payload.navigation("/dashboard");
//     yield put(postForgetPasswordSuccess());
//   } catch (e) {
//     console.log("this is error = ", e);
//     yield put(postForgetPasswordFailure(e));
//   }
// }

// ////////change password api////////////

// // export function* adminChangePassword(action) {
// //   console.log("this is middleware = ", action);
// //   try {
// //     const response = yield call(changePassword, action.payload);
// //     console.log("this is result = ", response.data.data.token);
// //     localStorage.setItem("credentials", response.data.data.token);
// //     action.payload.navigation("/dashboard");
// //     yield put(changePasswordSuccess());
// //   } catch (e) {
// //     console.log("this is error = ", e);
// //     yield put(changePasswordFailure(e));
// //   }
// // }

// ////////////logout api//////////////

// export function* adminLogout(action) {
//   console.log("this is middleware = ", action);
//   try {
//     const response = yield call(logoutApi, action.payload);
//     console.log("this is result = ", response.data.data.token);
//     // console.log(response);
//     localStorage.setItem("credentials", response.data.data.token);
//     action.payload.navigation("/dashboard");
//     yield put(logoutSuccess());
//   } catch (e) {
//     console.log("this is error = ", e);
//     yield put(logoutFailure(e));
//   }
// }
