import React from "react";
import { connect } from "react-redux";

const HeroDetails = (props) => {
  const { option } = props.location.state;
  const { id } = props.match.params; // Location index
  const { heroResults } = props;
  const currentHero = heroResults[id];

  const createOptionResults = () => {
    const appearance = currentHero.appearance;
    if (option === "appearance") {
      return (
        <div>
          <td>Gender: {appearance.gender}</td>
          <td>Eye Color: {appearance["eye-color"]}</td>
          <td>Hair Color: {appearance["hair-color"]}</td>
          <td>Height: {appearance.height[0] + " - " + appearance.height[1]}</td>
          <td>Race: {appearance.race}</td>
          <td>weight: {appearance.weight[0] + " - " + appearance.weight[1]}</td>
        </div>
      );
    } else if (option === "biography") {
      const biography = currentHero.biography;
      return (
        <div>
          <p>
            Aliases:
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

const mapStateToProps = (state) => ({
  heroResults: state.heroReducer.heroResults,
});

export default connect(mapStateToProps, null)(HeroDetails);
