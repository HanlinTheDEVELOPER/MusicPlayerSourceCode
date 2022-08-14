import React from "react";

export default function Setting(props) {
  const styles = {
    container: {
      userSelect: "none",
      display: "flex",
      alignItems: "center",
      width: "100%",
      border: "2px solid black",
      padding: "12px 12px",
      borderRadius: "10px",
    },
    label: {
      fontWeight: "bold",
    },
    switch: {
      marginLeft: "auto",
    },
    icon: {
      fontSize: "x-large",
      marginInline: 10,
    },
  };
  return (
    <section>
      <div style={styles.container}>
        <div style={styles.label}>Dark Mode</div>
        <div style={styles.switch}>
          {props.dark ? (
            <i
              style={styles.icon}
              className="fa-solid fa-toggle-on"
              onClick={props.toggleDark}
            ></i>
          ) : (
            <i
              style={styles.icon}
              className="fa-solid fa-toggle-off"
              onClick={props.toggleDark}
            ></i>
          )}
        </div>
      </div>
    </section>
  );
}
