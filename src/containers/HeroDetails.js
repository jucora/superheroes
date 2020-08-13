import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const hideInput = () => {
  const input = document.querySelector('.searchHeroInput');
  if (input) {
    input.style.display = 'none';
  }
};

const HeroDetails = props => {
  hideInput();
  const { option } = props;
  const { match } = props;
  const { id } = match.params;
  const { heroResults } = props;
  const currentHero = heroResults[id];

  const createOptionResults = () => {
    window.scrollTo(0, 50);

    if (option === 'appearance') {
      const { appearance } = currentHero;
      const { gender } = appearance;
      return (
        <div>
          <h3>Gender</h3>
          <p>{gender}</p>
          <h3>Eye Color</h3>
          <p>{appearance['eye-color']}</p>
          <h3>Hair Color</h3>
          <p>{appearance['hair-color']}</p>
          <h3>Height</h3>
          <p>{`${appearance.height[0]} - ${appearance.height[1]}`}</p>
          <h3>Race</h3>
          <p>{appearance.race}</p>
          <h3>weight</h3>
          <p>{`${appearance.weight[0]} - ${appearance.weight[1]}`}</p>
        </div>
      );
    }
    if (option === 'biography') {
      const { biography } = currentHero;
      return (
        <div>
          <h3>Aliases</h3>
          {biography.aliases.map(alias => (
            <p key={alias}>{alias}</p>
          ))}
          <h3>Alignment</h3>
          {' '}
          <p>{biography.alignment}</p>
          <h3>Alter-egos</h3>
          {' '}
          <p>{biography['alter-egos']}</p>
          <h3>First Appearance</h3>
          <p>{biography['first-appearance']}</p>
          <h3>Full-name</h3>
          {' '}
          <p>{biography['full-name']}</p>
          <h3>Place Of Birth</h3>
          {' '}
          <p>{biography['place-of-birth']}</p>
          <h3>Publisher</h3>
          {' '}
          <p>{biography.publisher}</p>
        </div>
      );
    }
    if (option === 'powerstats') {
      const { powerstats } = currentHero;
      return (
        <div>
          <h3>Combat</h3>
          {' '}
          <p>{powerstats.combat}</p>
          <h3>Durability</h3>
          {' '}
          <p>{powerstats.durability}</p>
          <h3>Intelligence</h3>
          {' '}
          <p>{powerstats.intelligence}</p>
          <h3>Power</h3>
          <p>{powerstats.power}</p>
          <h3>Speed</h3>
          <p>{powerstats.speed}</p>
          <h3>Strength</h3>
          <p>{powerstats.strength}</p>
        </div>
      );
    }
    return true;
  };

  return (
    <div className="optionInfo">
      <div className="left">
        <p>{currentHero.name}</p>

        <img src={currentHero.image.url} alt={currentHero.name} />
      </div>

      <div className="right">{createOptionResults()}</div>
    </div>
  );
};

HeroDetails.propTypes = {
  heroResults: PropTypes.arrayOf(PropTypes.object).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
  option: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  heroResults: state.heroReducer.heroResults,
  option: state.heroReducer.option,
  currentHero: state.heroReducer.currentHero,
});

export default connect(mapStateToProps, null)(HeroDetails);
