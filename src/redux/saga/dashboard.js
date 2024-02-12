import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { getUsersCountFailure, getUsersCountSuccess } from "../action/dashboard";
import { loginApi, dashBoard } from "../../axiosFile";

export function* fetchUser(action) {
  console.log("this is middleware");
  try {
    const user = yield call(dashBoard);
    yield put(getUsersCountSuccess());
  } catch (e) {
    console.log("this is error = ", e);
    yield put(getUsersCountFailure(e));
  }
}

// export function* loginUser(action) {
//   console.log("this is middleware");
//   try {
//     const user = yield call(loginApi, action.payload.userId);
//     yield put(getUsersCountSuccess());
//   } catch (e) {
//     console.log("this is error = ", e);
//     yield put(getUsersCountFailure(e));
//   }
// }

// export function* blockUnblock(action) {
//   console.log("this is middleware");
//   try {
//     const user = yield call(userBlockUnblock, action.payload.userId);
//     yield put(getUsersCountSuccess());
//   } catch (e) {
//     console.log("this is error = ", e);
//     yield put(getUsersCountFailure(e));
//   }
// }

// const loginApi = (data) => {
//   return axios
//       .get("https://192.168.3.176:5006/api/v1/admin/login", {
//         headers: {
//           Authorization: "Bearer " + "sdfsdfsdfdsf", //the token is a variable which holds the token
//         },
//       })
// }
