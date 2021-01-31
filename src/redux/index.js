import { combineReducers } from "redux";

import characters from "./сharacters/reducer";
import errors from "./errors/reducer";

const root = combineReducers({ characters, errors });

export default root;
