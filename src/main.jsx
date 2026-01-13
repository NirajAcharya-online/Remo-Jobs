import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import { HashRouter } from "react-router-dom";
import AuthListener from "./components/Hooks/AuthListstner.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <AuthListener />
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </StrictMode>
);
