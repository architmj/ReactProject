import { types } from "../actiontype";

export const getUsersCountInitiate = (data) => {
  console.log(data);
  return {
    type: types.GET_USERS_COUNT_INITIATE,
    payload: data,
  };
};

export const getUsersCountSuccess = (data) => {
  return {
    type: types.GET_USERS_COUNT_SUCCESS,
    payload: data,
  };
};

export const getUsersCountFailure = (error) => {
  return {
    type: types.GET_USERS_COUNT_FAILURE,
    payload: error,
  };
};
