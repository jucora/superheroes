import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { store } from "../components/App";

const HeroDetails = (props) => {
  console.log("state now", store.getState());
  const { option } = props;
  const { match } = props;
  const { id } = match.params; // Location index
  const { heroResults } = props;
  const currentHero = heroResults[id];

  const createOptionResults = () => {
    const { appearance } = currentHero;
    const { gender } = appearance;
    if (option === "appearance") {
      return (
        <div>
          <p>Gender: {gender}</p>
          <p>Eye Color: {appearance["eye-color"]}</p>
          <p>Hair Color: {appearance["hair-color"]}</p>
          <p>Height: {`${appearance.height[0]} - ${appearance.height[1]}`}</p>
          <p>Race: {appearance.race}</p>
          <p>weight: {`${appearance.weight[0]} - ${appearance.weight[1]}`}</p>
        </div>
      );
    }
    if (option === "biography") {
      const { biography } = currentHero;
      return (
        <div>
          <p>
            Aliases:{" "}
            {biography.aliases.forEach((alias) => ({
              alias,
            }))}
          </p>
          <p>Alignment: {biography.alignment}</p>
          <p>Alter-egos: {biography["alter-egos"]}</p>
          <p>First-appearance: {biography["first-appearance"]}</p>
          <p>Full-name: {biography["full-name"]}</p>
          <p>Place-of-birth: {biography["place-of-birth"]}</p>
          <p>Publisher: {biography.publisher}</p>
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
  location: PropTypes.objectOf(PropTypes.any).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

const mapStateToProps = (state) => ({
  heroResults: state.heroReducer.heroResults,
  option: state.heroReducer.option,
  currentHero: state.heroReducer.currentHero,
});

export default connect(mapStateToProps, null)(HeroDetails);
