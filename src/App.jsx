import React, { useState } from 'react';
import HUD from './components/Layout/HUD';
import CurriculumTree from './components/Dashboard/CurriculumTree';
import SimulationEngine from './components/Simulation/SimulationEngine';
import { useGame } from './context/GameContext';
import { CURRICULUM } from './data/curriculum';

function App() {
  const { userRank } = useGame();
  const [currentView, setCurrentView] = useState('dashboard'); // dashboard, simulation
  const [activeModuleId, setActiveModuleId] = useState(null);

  const handleSelectModule = (moduleId) => {
    setActiveModuleId(moduleId);
    setCurrentView('simulation');
  };

  const handleCompleteModule = () => {
    setCurrentView('dashboard');
    setActiveModuleId(null);
  };

  const handleExitSimulation = () => {
    setCurrentView('dashboard');
    setActiveModuleId(null);
  };

  // Helper to find module title
  const getModule = (id) => {
    for (const tier of Object.values(CURRICULUM)) {
      const mod = tier.modules.find(m => m.id === id);
      if (mod) return mod;
    }
    return null;
  };

  return (
    <div className="app-container">
      <HUD />
      <main className="container" style={{ paddingTop: '100px', paddingBottom: '50px' }}>
        {currentView === 'dashboard' ? (
          <>
            <h1 style={{ textAlign: 'center', marginTop: '2rem', marginBottom: '2rem' }}>CRT ACADEMY ENGINE</h1>
            <CurriculumTree onSelectModule={handleSelectModule} />
          </>
        ) : (
          <SimulationEngine
            module={getModule(activeModuleId)}
            onComplete={handleCompleteModule}
            onExit={handleExitSimulation}
          />
        )}
      </main>
    </div>
  );
}

export default App;
