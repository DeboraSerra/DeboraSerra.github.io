import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    const { missionsToShow } = this.props;
    return (
      <div data-testid="missions">
        <Title headline="Missions" />
        <div className="missions-parent">
          {missionsToShow.map(({ name, year, country, destination }) => (
            <MissionCard
              key={ name }
              name={ name }
              year={ year }
              country={ country }
              destination={ destination }
            />
          ))}
        </div>
      </div>
    );
  }
}

Missions.propTypes = {
  missionsToShow: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      year: PropTypes.string,
      country: PropTypes.string,
      destination: PropTypes.string,
    }),
  ).isRequired,
};

export default Missions;
