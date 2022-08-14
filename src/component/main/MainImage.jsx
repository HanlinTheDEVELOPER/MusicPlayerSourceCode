import React from "react";

const MainImage = (props) => {
  const dark = {
    border: props.dark ? "2px solid #caf0f8" : "2px solid #023e8a",
    boxShadow: props.dark ? "2px 4px 12px white" : "2px 4px 12px black",
  };
  return (
    <div>
      <div className="main-image-container">
        <div className="main-image" style={dark}>
          {props.icon}
        </div>
      </div>
      <hr />
    </div>
  );
};

export default MainImage;
