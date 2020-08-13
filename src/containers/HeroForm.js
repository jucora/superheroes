import React from "react";
import { connect } from "react-redux";
import Proptypes from "prop-types";
import { updateHeroes } from "../actions/index";
import heroApi from "../api/heroApi";

export class HeroForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { heroName: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit() {
    const { updateHeroes } = this.props;
    const { heroName } = this.state;

    if (heroName === "") return;
    heroApi.getByName(heroName).then((data) => {
      if (data) {
        updateHeroes(data);
      }
    });
  }

  render() {
    const { heroName } = this.state;
    return (
      <div>
        <div className="searchHeroInput">
          <h3 className="searchTitle">SEARCH BY NAME</h3>
          <input
            value={heroName}
            id={heroName}
            name="heroName"
            type="text"
            placeholder="Hero Name"
            onChange={this.handleChange}
          />

          <button
            className="submitButton"
            type="submit"
            value="SUBMIT"
            onClick={this.handleSubmit}
          >
            SEARCH
          </button>
        </div>
      </div>
    );
  }
}

HeroForm.propTypes = {
  updateHeroes: Proptypes.func.isRequired,
};

const matchDispatchToProps = (dispatch) => ({
  updateHeroes: (results) => {
    dispatch(updateHeroes(results));
  },
});

export default connect(null, matchDispatchToProps)(HeroForm);
