import React from "react";
import ReactDOM from "react-dom";

function Heading() {
  return <h1>My Favourite Foods</h1>;
}

function List() {
  return (
    <ul>
      <li>Bacon</li>
      <li>Jamon</li>
      <li>Noodles</li>
    </ul>
  );
}

ReactDOM.render(
  <div>
    <Heading />
    <List />
  </div>,
  document.getElementById("root")
);
