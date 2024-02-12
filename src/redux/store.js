import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./reducer";
import mySaga from "./saga/index";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// mount it on the Store
const store = configureStore({
  reducer: rootReducer(),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(mySaga);

export default store;
