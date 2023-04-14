import { createRoot } from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import reducers from "./reducers";
import App from "./components/App";
import thunk from "redux-thunk";

const store = configureStore({
  reducer: reducers,
});
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
