import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { DataProvider } from "./components/DataProvider/DataProvider";
import { initialState, reducer } from "./Utility/reducer";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DataProvider reducer={reducer} initialState={initialState}>
      <App />
    </DataProvider>
  </React.StrictMode>
);
