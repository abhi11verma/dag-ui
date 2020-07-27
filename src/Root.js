import React from "react";
import {Provider} from "react-redux";
import AppContainer from "Container/AppContainer";
import configureStore from "./stores/configureStore";

const {store} = configureStore();

function Root() {
  return (
    <Provider store={store}>
      <AppContainer/>
    </Provider>
  );
}

export default Root;
