import React, { createContext, useContext, useState, useEffect } from 'react';

const GameContext = createContext();

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};

export const GameProvider = ({ children }) => {
  // --- State Management Variables ---

  // Identity & Progression
  const [userRank, setUserRank] = useState('Apprentice'); // Apprentice, Hunter, Sniper, Elite
  const [difficulty, setDifficulty] = useState('Beginner'); // Beginner, Intermediate, Advanced, Elite
  const [chosenSymbol, setChosenSymbol] = useState(null); // e.g., 'NQ', 'BTC', 'EURUSD'
  const [placementCompleted, setPlacementCompleted] = useState(false);

  // Economy & Health
  const [pot, setPot] = useState(10000); // Starting capital (The Pot)
  const [streak, setStreak] = useState(0);
  const [xp, setXp] = useState(0);

  // Learning State
  const [completedModules, setCompletedModules] = useState([]);
  const [restorePoint, setRestorePoint] = useState(null); // { moduleId, frameId }

  // Constants
  const STARTING_POT = 10000;
  const XP_CORRECT = 20;
  const XP_SPEED_BONUS = 10;

  // --- Actions ---

  const updatePot = (amount) => {
    setPot(prev => Math.max(0, prev + amount));
  };

  const addXp = (amount) => {
    setXp(prev => prev + amount);
  };

  const incrementStreak = () => {
    setStreak(prev => prev + 1);
  };

  const resetStreak = () => {
    setStreak(0);
  };

  const completeModule = (moduleId) => {
    if (!completedModules.includes(moduleId)) {
      setCompletedModules(prev => [...prev, moduleId]);
    }
  };

  const setRestore = (moduleId, frameId) => {
    setRestorePoint({ moduleId, frameId });
  };

  const clearRestore = () => {
    setRestorePoint(null);
  };

  // Reset Game (Full Wipe)
  const resetGame = () => {
    setPot(STARTING_POT);
    setStreak(0);
    setXp(0);
    setCompletedModules([]);
    setRestorePoint(null);
    // We might keep placement/symbol or reset them too depending on strictness
  };

  const value = {
    userRank, setUserRank,
    difficulty, setDifficulty,
    chosenSymbol, setChosenSymbol,
    placementCompleted, setPlacementCompleted,
    pot, updatePot,
    streak, incrementStreak, resetStreak,
    xp, addXp,
    completedModules, completeModule,
    restorePoint, setRestore, clearRestore,
    resetGame
  };

  return (
    <GameContext.Provider value={value}>
      {children}
    </GameContext.Provider>
  );
};
