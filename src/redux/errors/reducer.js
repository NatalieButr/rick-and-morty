import {
  HIDE_ERROR,
  RECEIVE_CHARACTER_ERROR,
  RECEIVE_CHARACTER_LIST_ERROR,
} from "../types";

const initialState = {
  error: null,
  isError: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_CHARACTER_ERROR:
    case RECEIVE_CHARACTER_LIST_ERROR:
      return { isError: true, error: action.payload };
    case HIDE_ERROR:
      return initialState;
    default:
      return state;
  }
};
