import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import HeroCard from "../containers/HeroCard";
import heroApi from "../api/heroApi";
import { updateHeroes } from "../actions/index";
import HeroForm from "../containers/HeroForm";

class Home extends React.Component {
  componentDidMount() {
    const { updateHeroes, heroResults } = this.props;
    const allHeroes = [];
    if (heroResults.length === 0) {
      let record = 1;
      let random = 0;
      while (record <= 9) {
        random = Math.floor(Math.random() * 731) + 1;
        heroApi.getHeroById(random).then((data) => {
          if (data) {
            allHeroes.push(data);
          }
        });
        record += 1;
      }
      setTimeout(() => {
        updateHeroes(allHeroes);
      }, 1000);
      clearTimeout();
    }
  }

  render() {
    const { heroResults } = this.props;
    console.log("hero res", typeof heroResults);
    return (
      <div className="heroList">
        <HeroForm />
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

Home.propTypes = {
  heroResults: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  heroResults: state.heroReducer.heroResults,
});

const matchDispatchToProps = (dispatch) => ({
  updateHeroes: (results) => {
    dispatch(updateHeroes(results));
  },
});

export default connect(mapStateToProps, matchDispatchToProps)(Home);
