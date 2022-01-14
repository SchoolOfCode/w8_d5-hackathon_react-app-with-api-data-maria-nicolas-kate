import React from "react";

export function Button({ text, onClick, id }) {
  return <button onClick={onClick} key={`btn${id}`}>{text}</button>;
}
