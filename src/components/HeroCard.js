import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function HeroCard(props) {
  const { id, name, image } = props;
  return (
    <div className="POPOSSpace">
      <div className="cardImageContainer">
        <h1>{name}</h1>
        <img src={image} width="300" height="300" alt={`${name}`} />

        <Link
          to={{ pathname: `/details/${id}`, state: { option: 'appearance' } }}
          style={{ textDecoration: 'none' }}
        >
          <button type="button">Appearance</button>
        </Link>
        <Link
          to={{ pathname: `/details/${id}`, state: { option: 'biography' } }}
          style={{ textDecoration: 'none' }}
        >
          <button type="button">Biography</button>
        </Link>
        <Link
          to={{ pathname: `/details/${id}`, state: { option: 'powerstats' } }}
          style={{ textDecoration: 'none' }}
        >
          <button type="button">Powerstats</button>
        </Link>
      </div>
    </div>
  );
}

HeroCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default HeroCard;
