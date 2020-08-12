import React from 'react';

const authorImage = require('../img/julian.jpg');

const hideInput = () => {
  const input = document.querySelector('.searchHeroInput');
  if (input) {
    input.style.display = 'none';
  }
};

const Author = () => {
  hideInput();
  return (
    <div className="author">
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
  );
};

export default Author;
