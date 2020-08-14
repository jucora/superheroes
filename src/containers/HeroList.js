import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import HeroCard from "./HeroCard";
import heroApi from "../api/heroApi";
import { updateHeroes } from "../actions/index";
import store from "../index";

console.log(store);

const displayInput = () => {
  const input = document.querySelector(".searchHeroInput");
  if (input) {
    input.style.display = "block";
  }
};

class HeroList extends React.Component {
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
    displayInput();
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

const matchDispatchToProps = (dispatch) => ({
  updateHeroes: (results) => {
    dispatch(updateHeroes(results));
  },
});

export default connect(mapStateToProps, matchDispatchToProps)(HeroList);
