import CharactersService from "services/CharacterService";
import {
  FETCH_CHARACTER_LIST,
  RECEIVE_CHARACTER_ERROR,
  RECEIVE_CHARACTER_LIST_SUCCESS,
} from "../types";

console.log(CharactersService);

export function fetchCharacters(params) {
  return {
    type: FETCH_CHARACTER_LIST,
    receiveData: RECEIVE_CHARACTER_LIST_SUCCESS,
    receiveError: RECEIVE_CHARACTER_ERROR,
    callAPI: () => CharactersService?.getAll(params),
  };
}

// export function fetchPosts(params) {
//   return {
//     types: [
//       FETCH_CHARACTER_LIST,
//       RECEIVE_CHARACTER_LIST_SUCCESS,
//       RECEIVE_CHARACTER_ERROR,
//     ],
//     callAPI: CharactersService.getAll(params),
//   };
// }
//
// export const fetchCharacters = (params) =>
//   asyncAction({
//     types: [
//       FETCH_CHARACTER_LIST,
//       RECEIVE_CHARACTER_LIST_SUCCESS,
//       RECEIVE_CHARACTER_ERROR,
//     ],
//     callAPI: CharactersService.getAll(params),
//   });
