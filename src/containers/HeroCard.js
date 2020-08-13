import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addCurrentHero, addCurrentOption } from "../actions/index";

export const HeroCard = (props) => {
  const { id, name, image, addCurrentHero, hero, addCurrentOption } = props;
  return (
    <div className="heroCard">
      <div className="cardImageContainer">
        <h1>{name}</h1>
        <img src={image} width="300" height="300" alt={`${name}`} />
        <hr />

        <Link
          to={{ pathname: `/details/${id}` }}
          style={{ textDecoration: "none" }}
        >
          <button
            onClick={() => {
              addCurrentHero(hero);
              addCurrentOption("appearance");
            }}
            type="button"
          >
            Appearance
          </button>
        </Link>
        <Link
          to={{ pathname: `/details/${id}` }}
          style={{ textDecoration: "none" }}
        >
          <button
            onClick={() => {
              addCurrentHero(hero);
              addCurrentOption("biography");
            }}
            type="button"
          >
            Biography
          </button>
        </Link>
        <Link
          to={{ pathname: `/details/${id}` }}
          style={{ textDecoration: "none" }}
        >
          <button
            onClick={() => {
              addCurrentHero(hero);
              addCurrentOption("powerstats");
            }}
            type="button"
          >
            Powerstats
          </button>
        </Link>
      </div>
    </div>
  );
};

const matchDispatchToProps = (dispatch) => ({
  addCurrentHero: (hero) => {
    dispatch(addCurrentHero(hero));
  },
  addCurrentOption: (option) => {
    dispatch(addCurrentOption(option));
  },
});

HeroCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  addCurrentHero: PropTypes.func.isRequired,
  hero: PropTypes.objectOf(PropTypes.any).isRequired,
  addCurrentOption: PropTypes.func.isRequired,
};

export default connect(null, matchDispatchToProps)(HeroCard);
