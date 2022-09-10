

// import { createStore } from "redux";
// import dataReducer from "./reducers/dataReducer.js";


// const store = createStore(dataReducer);

// export default store;



import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import dataReducer from "./reducers/dataReducer.js";


let middlewares = [thunk];
const middleware = applyMiddleware(...middlewares);

export default createStore(dataReducer, composeWithDevTools(middleware));
