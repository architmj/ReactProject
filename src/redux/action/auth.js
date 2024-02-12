import { logIn, forgetPassword, changePassword, logOut } from "../actiontype";

export const postAdminLoginInitiate = (data) => {
  console.log(data);
  return {
    type: logIn.POST_LOGIN_INITIATE,
    payload: data,
  };
};

export const postAdminLoginSuccess = (data) => {
  return {
    type: logIn.POST_LOGIN_SUCCESS,
    payload: data,
  };
};

export const postAdminLoginFailure = (error) => {
  return {
    type: logIn.POST_LOGIN_FAILURE,
    payload: error,
  };
};
/////////forgetpassword api/////////////////////////

export const postForgetPasswordInitiate = (data) => {
  console.log(data);
  return {
    type: forgetPassword.POST_FORGET_PASSWORD_INITIATE,
    payload: data,
  };
};

export const postForgetPasswordSuccess = (data) => {
  return {
    type: forgetPassword.POST_FORGET_PASSWORD_SUCCESS,
    payload: data,
  };
};

export const postForgetPasswordFailure = (error) => {
  return {
    type: forgetPassword.POST_FORGET_PASSWORD_FAILURE,
    payload: error,
  };
};

//////////CHANGE password api///////////

export const changePasswordInitiate = (data) => {
  console.log(data);
  return {
    type: changePassword.CHANGE_PASSWORD_INITIATE,
    payload: data,
  };
};

export const changePasswordSuccess = (data) => {
  return {
    type: changePassword.CHANGE_PASSWORD_SUCCESS,
    payload: data,
  };
};

export const changePasswordFailure = (error) => {
  return {
    type: changePassword.CHANGE_PASSWORD_FAILURE,
    payload: error,
  };
};

//////////LOGOUT API//////////

export const logoutInitiate = (data) => {
  console.log(data);
  return {
    type: logOut.LOGOUT_INITIATE,
    payload: data,
  };
};

export const logoutSuccess = (data) => {
  return {
    type: logOut.LOGOUT_SUCCESS,
    payload: data,
  };
};

export const logoutFailure = (error) => {
  return {
    type: logOut.LOGOUT_FAILURE,
    payload: error,
  };
};
