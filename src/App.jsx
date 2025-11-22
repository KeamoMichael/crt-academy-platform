import React, { useState } from 'react';
import HUD from './components/Layout/HUD';
import CurriculumMap from './components/Dashboard/CurriculumMap';
import LessonEngine from './components/Lesson/LessonEngine';
import PlacementAssessment from './components/Onboarding/PlacementAssessment';
import { useGame } from './context/GameContext';
import { CURRICULUM } from './data/curriculum';

import PracticalSimulator from './components/Simulation/PracticalSimulator';

function App() {
  const { userRank, placementCompleted } = useGame();
  const [currentView, setCurrentView] = useState('dashboard'); // dashboard, lesson, practical
  const [activeModuleId, setActiveModuleId] = useState(null);

  if (!placementCompleted) {
    return <PlacementAssessment />;
  }

  const handleSelectModule = (moduleId) => {
    setActiveModuleId(moduleId);
    setCurrentView('lesson');
  };

  const handleCompleteModule = () => {
    setCurrentView('dashboard');
    setActiveModuleId(null);
  };

  const handleExitLesson = () => {
    setCurrentView('dashboard');
    setActiveModuleId(null);
  };

  const handleExitPractical = () => {
    setCurrentView('dashboard');
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
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-2xl font-bold text-primary">CRT ACADEMY</h1>
              <button
                className="btn-outline"
                onClick={() => setCurrentView('practical')}
              >
                PRACTICAL MODE
              </button>
            </div>
            <CurriculumMap onSelectModule={handleSelectModule} />
          </>
        ) : currentView === 'practical' ? (
          <PracticalSimulator onExit={handleExitPractical} />
        ) : (
          <LessonEngine
            module={getModule(activeModuleId)}
            onComplete={handleCompleteModule}
            onExit={handleExitLesson}
          />
        )}
      </main>
    </div>
  );
}

export default App;
