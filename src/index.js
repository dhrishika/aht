// Importing necessary modules
import React from "react";
import ReactDOM from "react-dom/client";

// Importing CSS file
import "./index.css";

// Importing the main component of the application
import App from "./App";

// Creating a root element to render the application
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering the main component inside the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
