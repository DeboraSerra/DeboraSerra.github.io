import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';
import missions from './data/missions';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      showAll: true,
      selectedMissions: '',
    };
  }

  handleClick(planet) {
    const newMissions = missions.filter(({ destination }) => destination === planet);
    this.setState({
      showAll: false,
      selectedMissions: newMissions,
    });
    if (!planet) {
      this.setState({
        showAll: true,
        selectedMissions: [],
      });
    }
  }

  render() {
    const { showAll, selectedMissions } = this.state;
    return (
      <div>
        <Header />
        <SolarSystem handleClick={ this.handleClick } />
        {showAll && <Missions missionsToShow={ missions } />}
        {!showAll && <Missions missionsToShow={ selectedMissions } />}
      </div>
    );
  }
}

export default App;
