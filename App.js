import React, { useState } from 'react';
import Menu from './Menu';
import scenarioData from './scenarioData';
import './App.css';
import ProfileSection from './ProfileSection';

const App = () => {
  const [currentSection, setCurrentSection] = useState('');

  const handleButtonClick = (section) => {
    if (section === 'previous' || section === 'next') {
      const currentIndex = scenarioData.findIndex((scenario) => scenario.id === currentSection.id);
      let newIndex;
      if (section === 'previous') {
        newIndex = currentIndex - 1;
        if (newIndex < 0) {
          newIndex = scenarioData.length - 1;
        }
      } else {
        newIndex = currentIndex + 1;
        if (newIndex === scenarioData.length) {
          newIndex = 0;
        }
      }
      setCurrentSection(scenarioData[newIndex]);
    } else {
      setCurrentSection(section); // Change 'profileData' to 'profileSection'
    }
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
    <div>
      <Menu handleButtonClick={handleButtonClick} />
      {renderSection()}
    </div>
  );
};

export default App;
