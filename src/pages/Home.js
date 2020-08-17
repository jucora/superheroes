import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HeroCard from '../containers/HeroCard';
import { updateHeroes } from '../actions/index';
import HeroForm from '../containers/HeroForm';

import heroApi from '../api/heroApi';

class Home extends React.Component {
  componentDidMount() {
    const { updateHeroes, heroResults } = this.props;
    const heroes = [];
    if (heroResults.length === 0) {
      let i = 1;
      while (i <= 3) {
        heroApi
          .getHeroById(Math.floor(Math.random() * 731 + 1))
          .then(data => {
            if (data) {
              heroes.push(data);
            }
          });
        i += 1;
      }
    }
    setTimeout(() => {
      updateHeroes(heroes);
    }, 3000);
  }

  render() {
    const { heroResults } = this.props;
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
  updateHeroes: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  heroResults: state.heroReducer.heroResults,
});

const matchDispatchToProps = dispatch => ({
  updateHeroes: results => {
    dispatch(updateHeroes(results));
  },
});

export default connect(mapStateToProps, matchDispatchToProps)(Home);
