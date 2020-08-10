import React from "react";
import { Link } from "react-router-dom";

function HeroCard(props) {
  const { id, name, image } = props;
  return (
    <div className="POPOSSpace">
      <div className="cardImageContainer">
        <h1>{name}</h1>
        <img src={image} width="300" height="300" alt={`${name}`} />

        <Link
          to={{ pathname: `/details/${id}`, state: { option: "appearance" } }}
          style={{ textDecoration: "none" }}
        >
          <button>Appearance</button>
        </Link>
        <Link
          to={{ pathname: `/details/${id}`, state: { option: "biography" } }}
          style={{ textDecoration: "none" }}
        >
          <button>Biography</button>
        </Link>
        <Link
          to={{ pathname: `/details/${id}`, state: { option: "powerstats" } }}
          style={{ textDecoration: "none" }}
        >
          <button>Powerstats</button>
        </Link>
      </div>
    </div>
  );
}

export default HeroCard;
