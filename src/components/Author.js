import React from "react";

const Author = () => {
  return (
    <div className="author">
      <h1>JULIAN BELMONTE</h1>
      <img src={require("../img/julian.jpg")}></img>
      <div className={"portfolioLink"}>
        <a href="https://jucora.github.io/" target="_blank">
          <h2>Please visit my portfolio</h2>
        </a>
      </div>
    </div>
  );
};

export default Author;
