import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const HeroDetails = props => {
  const { location } = props;
  const { option } = location.state;
  const { match } = props;
  const { id } = match.params; // Location index
  const { heroResults } = props;
  const currentHero = heroResults[id];

  const createOptionResults = () => {
    const { appearance } = currentHero;
    const { gender } = appearance;
    if (option === 'appearance') {
      return (
        <div>
          <p>
            Gender:
            {gender}
          </p>
          <p>
            Eye Color:
            {appearance['eye-color']}
          </p>
          <p>
            Hair Color:
            {appearance['hair-color']}
          </p>
          <p>
            Height:
            {`${appearance.height[0]} - ${appearance.height[1]}`}
          </p>
          <p>
            Race:
            {appearance.race}
          </p>
          <p>
            weight:
            {`${appearance.weight[0]} - ${appearance.weight[1]}`}
          </p>
        </div>
      );
    }
    if (option === 'biography') {
      const { biography } = currentHero;
      return (
        <div>
          <p>
            Aliases:
            {biography.aliases.forEach(alias => ({
              alias,
            }))}
          </p>
          <p>
            Alignment:
            {biography.alignment}
          </p>
          <p>
            Alter-egos:
            {biography['alter-egos']}
          </p>
          <p>
            First-appearance:
            {biography['first-appearance']}
          </p>
          <p>
            Full-name:
            {biography['full-name']}
          </p>
          <p>
            Place-of-birth:
            {biography['place-of-birth']}
          </p>
          <p>
            Publisher:
            {biography.publisher}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="optionInfo">
      <div className="left">
        <div>{currentHero.name}</div>
        <div>
          <img src={currentHero.image.url} alt={currentHero.name} />
        </div>
      </div>

      <div className="right">{createOptionResults()}</div>
    </div>
  );
};

HeroDetails.propTypes = {
  heroResults: PropTypes.arrayOf(PropTypes.object).isRequired,
  location: PropTypes.objectOf(PropTypes.any).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

const mapStateToProps = state => ({
  heroResults: state.heroReducer.heroResults,
});

export default connect(mapStateToProps, null)(HeroDetails);
