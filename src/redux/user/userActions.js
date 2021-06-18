import axios from "axios";
import {
  GET_USERS_START,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
} from "./userTypes";

export const getUserStart = () => {
  return {
    type: GET_USERS_START,
  };
};

export const getUserSuccess = (users) => {
  return {
    type: GET_USERS_SUCCESS,
    payload: users,
  };
};

export const getUserError = (message) => {
  return {
    type: GET_USERS_ERROR,
    payload: message,
  };
};

export const fetchUsers = () => async (dispach, getState) => {
  dispach(getUserStart());
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    dispach(getUserSuccess(response.data));
  } catch (error) {
    dispach(getUserError(error.message));
  }
};
