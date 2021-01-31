import {
  RECEIVE_CHARACTER_LIST_SUCCESS,
  RECEIVE_CHARACTER_SUCCESS,
} from "../types";

const initialState = {
  characterList: [],
  character: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_CHARACTER_LIST_SUCCESS:
      return { ...state, characterList: action.payload };
    case RECEIVE_CHARACTER_SUCCESS:
      return { ...state, character: action.payload };
    default:
      return state;
  }
};
