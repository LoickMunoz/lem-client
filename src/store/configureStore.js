import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import initialState from "../reducers/initialState";

const persistConfig = {
  key: "root",
  storage
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  const store = createStore(
    persistedReducer,
    initialState,
    compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
  let persistor = persistStore(store);
  return { store, persistor };
};
