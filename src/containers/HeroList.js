import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import HeroCard from "../components/HeroCard";
// era funcion, implementar
class HeroList extends React.Component {
  render() {
    const { heroResults } = this.props;
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
  }
}

HeroList.propTypes = {
  heroResults: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  heroResults: state.heroReducer.heroResults,
});

export default connect(mapStateToProps, null)(HeroList);
