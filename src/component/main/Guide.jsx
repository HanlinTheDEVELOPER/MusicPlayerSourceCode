import React from "react";

const Guide = (props) => {
  const dark = {
    textShadow: props.dark ? "2px 4px 12px white" : "2px 4px 12px black",
  };
  return (
    <section>
      <h1 style={dark} className="tab-header">
        Description
      </h1>
      <h2 className="guide-head" style={{ marginTop: 30 }}>
        Language
      </h2>
      <li className="guide-text">HTML / CSS / ReactJS</li>
      <h2 className="guide-head">Brief</h2>
      <li className="guide-text">
        This is the very first app I built from scratch after finishing React
        Basic Course from Scrimba. So if found out any bugs or inconvenients,
        please let me know!
      </li>
      <h2 className="guide-head">Features</h2>
      <li className="guide-text">
        You can choose between main playlist and favourite plalist!
      </li>
      <li className="guide-text">
        You can add each song to your favourite list and download to your local
        machine!
      </li>
      <li className="guide-text">
        You can choose between light mode and dark mode!
      </li>
      <li className="guide-text">
        I used localStorage so that your choose of favor won't vanish after each
        session!
      </li>

      <a href="mailto:hanlin1646@gmail.com" className="btn">
        Contact
      </a>
    </section>
  );
};

export default Guide;
