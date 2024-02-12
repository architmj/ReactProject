import { logIn, forgetPassword, changePassword, logOut } from "../actiontype";

const initialStates = {
  userCount: 0,
  userCountLoader: false,
  userCountSuccess: false,
};

export const login = (state = initialStates, action) => {
  switch (action.type) {
    case logIn.POST_LOGIN_INITIATE:
      return {
        ...state,
        userCountLoader: true,
      };

    case logIn.POST_LOGIN_SUCCESS:
      return {
        ...state,
        userCountLoader: false,
        userCount: action.payload,
        userCountSuccess: true,
      };

    case logIn.POST_LOGIN_FAILURE:
      return {
        ...state,
        userCountLoader: false,
      };

    default:
      return state;
  }
};

/////////forgetpassword api/////////////

const iStates = {
  userCount: 0,
  userCountLoader: false,
  userCountSuccess: false,
};

export const forgetpassword = (state = iStates, action) => {
  switch (action.type) {
    case forgetPassword.POST_FORGET_PASSWORD_INITIATE:
      return {
        ...state,
        userCountLoader: true,
      };

    case forgetPassword.POST_FORGET_PASSWORD_SUCCESS:
      return {
        ...state,
        userCountLoader: false,
        userCount: action.payload,
        userCountSuccess: true,
      };

    case forgetPassword.POST_FORGET_PASSWORD_FAILURE:
      return {
        ...state,
        userCountLoader: false,
      };

    default:
      return state;
  }
};

///////////change password///////////

const inStates = {
  userCount: 0,
  userCountLoader: false,
  userCountSuccess: false,
};

export const changePass = (state = inStates, action) => {
  switch (action.type) {
    case changePassword.CHANGE_PASSWORD_INITIATE:
      return {
        ...state,
        userCountLoader: true,
      };

    case changePassword.CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        userCountLoader: false,
        userCount: action.payload,
        userCountSuccess: true,
      };

    case changePassword.CHANGE_PASSWORD_FAILURE:
      return {
        ...state,
        userCountLoader: false,
      };

    default:
      return state;
  }
};

///////////logout api/////////////

const iniStates = {
  userCount: 0,
  userCountLoader: false,
  userCountSuccess: false,
};

export const logout = (state = iniStates, action) => {
  switch (action.type) {
    case logOut.LOGOUT_INITIATE:
      return {
        ...state,
        userCountLoader: true,
      };

    case logOut.LOGOUT_SUCCESS:
      return {
        ...state,
        userCountLoader: false,
        userCount: action.payload,
        userCountSuccess: true,
      };

    case logOut.LOGOUT_FAILURE:
      return {
        ...state,
        userCountLoader: false,
      };

    default:
      return state;
  }
};
