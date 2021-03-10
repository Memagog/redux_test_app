import { applyMiddleware, createStore } from "redux";
import forbiddenWordsMiddleware from "../middleware/middleware";
import rootReducer from "../reducers/reducer";

const store = createStore(
     rootReducer,
     applyMiddleware(forbiddenWordsMiddleware
    ));
export default store;