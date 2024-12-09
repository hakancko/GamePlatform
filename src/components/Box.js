import React from "react";
import "../css/Box.css";

const Box = ({ image, installed, name }) => {
  return (
    <div className="box">
      {installed ? (
        <>
          <img src={image} ></img>
          <div className="play-overlay">
            <h3>{name}</h3>
            <i class="fa-duotone fa-solid fa-circle-play fa-2xl play-btn"></i>
          </div>
        </>
      ) : (
        <>
          <img className="notInstalledGameWiew" src={image} ></img>

          <div className="overlay">
            <i class="fa-solid fa-circle-arrow-down fa-2xl download-btn"></i>
          </div>
        </>
      )}
    </div>
  );
};
export default Box;
