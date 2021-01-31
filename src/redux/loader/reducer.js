import { HIDE_LOADER, SHOW_LOADER } from "../types";

const initialState = {
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return { isLoading: true };
    case HIDE_LOADER:
      return initialState;
    default:
      return state;
  }
};
