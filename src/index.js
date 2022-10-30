import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App.jsx";
import withStore from "./app/hoc/withStore.jsx";
import "bootstrap/dist/css/bootstrap.css";

const AppWithStore = withStore(App);

ReactDOM.createRoot(document.querySelector("#root")).render(
    <React.StrictMode>
        <AppWithStore/>
    </React.StrictMode>
);
