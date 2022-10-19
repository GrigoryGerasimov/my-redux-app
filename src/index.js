import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App.jsx";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.createRoot(document.querySelector("#root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
