/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage, handleClick } = this.props;
    return (
      <div
        data-testid="planet-card"
        role="button"
        onClick={ () => handleClick(planetName) }
        className="planet-card"
      >
        <p data-testid="planet-name" className="planet-name">
          { planetName }
        </p>
        <img src={ planetImage } alt={ `Planeta ${planetName}` } />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetImage: PropTypes.string.isRequired,
  planetName: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default PlanetCard;
