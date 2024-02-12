import { types } from "../actiontype";

const initialStates = {
  userCount: 0,
  userCountLoader: false,
  userCountSuccess: false,
};

export const dashboard = (state = initialStates, action) => {
  switch (action.type) {
    case types.GET_USERS_COUNT_INITIATE:
      return {
        ...state,
        userCountLoader: true,
      };

    case types.GET_USERS_COUNT_SUCCESS:
      return {
        ...state,
        userCountLoader: false,
        userCount: action.payload,
        userCountSuccess: true,
      };

    case types.GET_USERS_COUNT_FAILURE:
      return {
        ...state,
        userCountLoader: false,
      };

    default:
      return state;
  }
};
