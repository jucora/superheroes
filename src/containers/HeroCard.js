import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addCurrentHero, addCurrentOption } from '../actions/index';

const HeroCard = props => {
  const {
    id, name, image, addCurrentHero, hero, addCurrentOption,
  } = props;

  const setCurrentValues = option => {
    addCurrentHero(hero);
    addCurrentOption(option);
  };

  return (
    <div className="heroCard col-lg-4 col-md-6 col-sm-12, col-xs-12">
      <div className="cardContainer">
        <h1>{name}</h1>
        <img src={image} width="300" height="300" alt={`${name}`} />
        <hr />

        <Link to={`/details/${id}`} style={{ textDecoration: 'none' }}>
          <button
            onClick={() => {
              setCurrentValues('appearance');
            }}
            type="button"
          >
            Appearance
          </button>
        </Link>
        <Link to={`/details/${id}`} style={{ textDecoration: 'none' }}>
          <button
            onClick={() => {
              setCurrentValues('biography');
            }}
            type="button"
          >
            Biography
          </button>
        </Link>
        <Link to={`/details/${id}`} style={{ textDecoration: 'none' }}>
          <button
            onClick={() => {
              setCurrentValues('powerstats');
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

const matchDispatchToProps = dispatch => ({
  addCurrentHero: hero => {
    dispatch(addCurrentHero(hero));
  },
  addCurrentOption: option => {
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
