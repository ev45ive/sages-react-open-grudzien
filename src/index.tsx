import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

window.React = React;
(window as any).ReactDOM = ReactDOM;

interface User {
  id: number;
  name: string;
  color: string;
  pet: {
    name: string;
  };
}

const users: User[] = [
  { id: 1, name: "Alice", color: "blue", pet: { name: "Cat" } },
  { id: 2, name: "Bob", color: "red", pet: { name: "Dog" } },
  { id: 3, name: "Cat", color: "green", pet: { name: "Parrot" } },
];

const Section = React.createElement(
  "ul",
  {
    id: "testid",
    className: "klasa",
  },
  users.map((user) => {
    return React.createElement(
      "li",
      { style: { color: user.color, padding: "1rem" }, key: user.id },
      React.createElement("span", null, user.name + " has a " + user.pet.name)
    );
  })
  // React.createElement("input", { key: "pamietaj-mnie" })
);

const main = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

main.render(Section);

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
