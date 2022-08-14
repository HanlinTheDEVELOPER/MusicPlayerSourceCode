import React from "react";

export default function Side(props) {
  const styles = {
    light: {
      backgroundColor: props.isShown ? "#003E8A" : "transparent",
      color: props.isShown ? "#83c5be" : "#003E8A80",
    },
    dark: {
      backgroundColor: props.isShown ? "#83c5be" : "transparent",
      color: props.isShown ? "#010230" : "#83c5be",
    },
  };
  return (
    <p
      id={props.id}
      className="list-group-item"
      onClick={props.handleShow}
      style={props.dark ? styles.dark : styles.light}
    >
      <i className={props.icon}></i>
      <span>{props.name}</span>
    </p>
  );
}
