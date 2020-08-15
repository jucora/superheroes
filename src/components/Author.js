import React from "react";

const authorImage = require("../img/julian.jpg");

const Author = () => {
  return (
    <div className="author row">
      <div className="col-lg-12">
        <h1>JULIAN BELMONTE</h1>
        <img src={authorImage} alt="Author" />
        <div className="portfolioLink">
          <a
            href="https://jucora.github.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>Please visit my portfolio</h2>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Author;
