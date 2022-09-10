

import { createStore } from "redux";
import dataReducer from "./reducers/dataReducer.js";

const store = createStore(dataReducer);

export default store;