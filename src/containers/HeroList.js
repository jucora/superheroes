import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import HeroCard from "./HeroCard";

const displayInput = () => {
  const input = document.querySelector(".searchHeroInput");
  if (input) {
    input.style.display = "flex";
  }
};

export const HeroList = (props) => {
  displayInput();
  const { heroResults } = props;
  return (
    <div className="heroList">
      {heroResults.map((hero, index) => (
        <HeroCard
          id={index}
          key={hero.id}
          name={hero.name}
          image={hero.image.url}
          hero={hero}
        />
      ))}
    </div>
  );
};

HeroList.propTypes = {
  heroResults: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  heroResults: state.heroReducer.heroResults,
});

export default connect(mapStateToProps, null)(HeroList);
