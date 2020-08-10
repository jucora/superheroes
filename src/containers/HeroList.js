import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HeroCard from '../components/HeroCard';
import { updateFromReduxStore } from '../actions/index';
// era funcion, implementar
class HeroList extends React.Component {
  componentDidMount() {
    const { updateFromReduxStore } = this.props;
    updateFromReduxStore();
  }

  render() {
    const { heroResults } = this.props;
    return (
      <div className="POPOSList">
        {heroResults.map((hero, index) => (
          <HeroCard
            id={index}
            key={hero.id}
            name={hero.name}
            image={hero.image.url}
          />
        ))}
      </div>
    );
  }
}

HeroList.propTypes = {
  updateFromReduxStore: PropTypes.func.isRequired,
  heroResults: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  heroResults: state.heroReducer.heroResults,
});

const matchDispatchToProps = dispatch => ({
  updateFromReduxStore: () => {
    dispatch(updateFromReduxStore());
  },
});

export default connect(mapStateToProps, matchDispatchToProps)(HeroList);
