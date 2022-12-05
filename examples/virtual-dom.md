```tsx
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

const Section = (props: { users: User[] }) =>
  React.createElement(
    "ul",
    {
      id: "testid",
      className: "klasa",
    },
    props.users.map((user) =>
      React.createElement(UserItem, { user, key: user.id })
    )
  );

const UserItem = (props: { user: User; key: string | number }) =>
  React.createElement(
    "li",
    { style: { color: props.user.color, padding: "1rem" }, key: props.key },
    React.createElement(
      "span",
      null,
      props.user.name + " has a " + props.user.pet.name
    )
  );

const main = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

main.render(
  React.createElement(Section, { users, children: <h3>Users List </h3> })
);

```