import {combineReducers} from "redux"
import {persistReducer} from "redux-persist"
import storage from 'redux-persist/lib/storage'
import app from "./AppReducer"


const persistConfig = {
  key: 'root',
  version: 1,
  storage: storage,
};

const appReducer = persistReducer(persistConfig, combineReducers({
  app,
}));


export default (state, action) => {
  return appReducer(state, action)
}
