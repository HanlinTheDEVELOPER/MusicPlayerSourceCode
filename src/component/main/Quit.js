import React from "react";
// import Emoji from "../../../public/assets/emoji.jpg";

export default function Quit() {
  const styles = {
    main: {
      position: "sticky",
      top: 0,
      width: "100%",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      marginBottom: 25,
      fontSize: "x-large",
      fontWeight: "bold",
      textAlign: "center",
    },
    img: {
      height: "200px",
      width: "200px",
      animation: "imgSpin 0.5s ease infinite alternate",
    },
  };
  return (
    <section style={styles.main}>
      <p style={styles.text}>Just close the browser tab, Idiot!</p>
      <img
        src={process.env.PUBLIC_URL + "assets/emoji.jpg"}
        alt="blahblah"
        style={styles.img}
      />
    </section>
  );
}
