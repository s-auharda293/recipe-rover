import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import StarRating from "./StarRating";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StarRating maxRating={5} size={48} />
  </React.StrictMode>
);
