import {
  GET_USERS_START,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
} from "./userTypes";

const initialState = {
  usersList: [],
  isLoading: false,
  error: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_START:
      return {
        ...state,
        usersList: [],
        isLoading: true,
        error: "",
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        usersList: action.payload,
        isLoading: false,
        error: "",
      };
    case GET_USERS_ERROR:
      return {
        ...state,
        usersList: [],
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
