import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Global from "./styles/Global";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Global />
        <App />
    </React.StrictMode>,
);
