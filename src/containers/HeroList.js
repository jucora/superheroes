import React from "react";
import HeroCard from "../components/HeroCard";
import { connect } from "react-redux";
import { updateFromReduxStore } from "../actions/index";
// era funcion, implementar
class HeroList extends React.Component {
  componentDidMount() {
    const { updateFromReduxStore } = this.props;
    updateFromReduxStore();
  }

  render() {
    const { heroResults } = this.props;
    console.log(heroResults);
    return (
      <div className="POPOSList">
        {heroResults.map((hero, index) => (
          <HeroCard
            id={index}
            key={index}
            name={hero.name}
            image={hero.image.url}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  heroResults: state.heroReducer.heroResults,
});

const matchDispatchToProps = (dispatch) => ({
  updateFromReduxStore: () => {
    dispatch(updateFromReduxStore());
  },
});

export default connect(mapStateToProps, matchDispatchToProps)(HeroList);
