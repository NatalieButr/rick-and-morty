import { combineReducers } from "redux";

import characters from "./сharacters/reducer";
import errors from "./errors/reducer";
import loader from "./loader/reducer";

const root = combineReducers({ characters, errors, loader });

export default root;
