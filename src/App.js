import React from 'react';
import CoverSlide from './components/CoverSlide';
import MissionStatement from './components/MissionStatement';
import DigitalButler from './components/DigitalButler';
import AutomationStation from './components/AutomationStation';
import SecurityUserControl from './components/SecurityUserControl';
import InterconnectedEcosystem from './components/InterconnectedEcosystem';
import DemocratizingAccess from './components/DemocratizingAccess';
import VisionForFuture from './components/VisionForFuture';
import InvestmentPartnerships from './components/InvestmentPartnerships';
import TheTeam from './components/TheTeam';
import CallToAction from './components/CallToAction';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <CoverSlide />
      <MissionStatement />
      <DigitalButler />
      <AutomationStation />
      <SecurityUserControl />
      <InterconnectedEcosystem />
      <DemocratizingAccess />
      <VisionForFuture />
      <InvestmentPartnerships />
      <TheTeam />
      <CallToAction />
    </div>
  );
}

export default App;