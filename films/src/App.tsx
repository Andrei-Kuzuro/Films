import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { RootRouter } from "./navigation/RootRouter";
import { store } from "./redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <RootRouter />
      </Provider>
    </div>
  );
}

export default App;
