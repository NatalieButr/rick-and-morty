import { fetchData } from "utils";

import {
  FETCH_CHARACTER_LIST,
  RECEIVE_CHARACTER_ERROR,
  RECEIVE_CHARACTER_LIST_ERROR,
  RECEIVE_CHARACTER_LIST_SUCCESS,
  RECEIVE_CHARACTER_SUCCESS,
  FETCH_CHARACTER,
  FETCH_MORE_CHARACTER_LIST,
  RECEIVE_MORE_CHARACTER_LIST_ERROR,
  RECEIVE_MORE_CHARACTER_LIST_SUCCESS,
} from "../types";

export function fetchCharacters(params) {
  return {
    type: FETCH_CHARACTER_LIST,
    receiveData: RECEIVE_CHARACTER_LIST_SUCCESS,
    receiveError: RECEIVE_CHARACTER_LIST_ERROR,
    callAPI: () => fetchData(params),
  };
}

export function fetchMoreCharacters(params) {
  return {
    type: FETCH_MORE_CHARACTER_LIST,
    receiveData: RECEIVE_MORE_CHARACTER_LIST_SUCCESS,
    receiveError: RECEIVE_MORE_CHARACTER_LIST_ERROR,
    callAPI: () => fetchData(params),
  };
}

export function fetchCharacter(params) {
  return {
    type: FETCH_CHARACTER,
    receiveData: RECEIVE_CHARACTER_SUCCESS,
    receiveError: RECEIVE_CHARACTER_ERROR,
    callAPI: () => fetchData(params),
  };
}
