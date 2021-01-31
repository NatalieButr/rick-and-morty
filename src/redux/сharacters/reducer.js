import {
  RECEIVE_CHARACTER_LIST_SUCCESS,
  RECEIVE_CHARACTER_SUCCESS,
  RECEIVE_MORE_CHARACTER_LIST_SUCCESS,
} from "../types";

const initialState = {
  characterList: [],
  character: null,
  info: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_CHARACTER_LIST_SUCCESS:
      return {
        ...state,
        characterList: action.payload.results,
        info: action.payload.info,
      };
    case RECEIVE_MORE_CHARACTER_LIST_SUCCESS:
      return {
        ...state,
        characterList: [...state.characterList, ...action.payload.results],
        info: action.payload.info,
      };
    case RECEIVE_CHARACTER_SUCCESS:
      return { ...state, character: action.payload };
    default:
      return state;
  }
};
