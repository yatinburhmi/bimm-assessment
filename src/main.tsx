import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import { worker } from "./test/browser";

worker.start().then(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
});
