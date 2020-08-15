import React from 'react';
import PropTypes from 'prop-types';

class HeroFilter extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { handleChange } = this.props;
    handleChange(e.target.value);
  }

  render() {
    const idArray = Array.from(Array(732), (_, x) => x + 1);
    return (
      <div>
        <label className="searchTitle" htmlFor="id">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 heroFilter">
            FILTER BY ID:
            <select name="id" id="hero" onChange={this.handleChange}>
              {idArray.map(heroId => (
                <option value={heroId} key={heroId}>
                  {heroId}
                </option>
              ))}
            </select>
          </div>
        </label>
      </div>
    );
  }
}

HeroFilter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default HeroFilter;
