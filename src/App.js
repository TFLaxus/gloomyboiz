import React, { useState } from 'react';
import Menu from './Menu';
import scenarioData from './scenarioData';
import './App.css';
import ProfileSection from './ProfileSection';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScenariosSection from './ScenariosSection';
import SingleProfileSection from './SingleProfileSection';
import NotFound from './NotFound';

const App = () => {
  const [currentSection, setCurrentSection] = useState('');

  const handleButtonClick = (section) => {
    setCurrentSection(section);
  };

  const renderSection = () => {
    if (currentSection === 'bossData') {
      return <h2>Boss Data Section</h2>;
    } else if (currentSection === 'scenarios') {
      return (
        <div>
          <h2>Scenarios</h2>
          <div className="scenario-buttons">
            {scenarioData.map((scenario) => (
              <button key={scenario.id} onClick={() => handleButtonClick(scenario)}>
                {scenario.title}
              </button>
            ))}
          </div>
        </div>
      );
    } else if (typeof currentSection === 'object') {
      const { title, scenarioNumber, introduction, objective, specialRules, conclusion, rewards } = currentSection;
      return (
        <div>
          <h2>{title}</h2>
          <div className="scenario-text-container">
            <p>Scenario Number: {scenarioNumber}</p>
            <p>Introduction: {introduction}</p>
            <p>Objective: {objective}</p>
            <p>Special Rules: {specialRules}</p>
            <p>Conclusion: {conclusion}</p>
            <p>Rewards: {rewards}</p>
          </div>
          <div className="scenario-navigation-buttons">
            <button onClick={() => handleButtonClick('previous')}>Previous</button>
            <button onClick={() => handleButtonClick('next')}>Next</button>
          </div>
        </div>
      );
    } else if (currentSection === 'profiles') {
      return <ProfileSection />;
    } else {
      return (
        <div>
          <h2>Gloomyboiz Main Menu</h2>
          <div className="scenario-text-container">Welcome to the app!</div>
        </div>
      );
    }
  };

  return (
    <Router>
      <div>
        <Menu handleButtonClick={handleButtonClick} />
        <Routes>
          <Route path="/" element={<ScenariosSection />} />
          <Route path="/scenarios" element={<ScenariosSection />} />
          <Route path="/profiles" element={<ProfileSection />} />
          <Route path="/profile/:id" element={<SingleProfileSection />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {renderSection()}
      </div>
    </Router>
  );
};

export default App;
