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
  // State Management Variables
  const [userRank, setUserRank] = useState('Apprentice'); // Apprentice, Hunter, Sniper
  const [currentSymbol, setCurrentSymbol] = useState('NQ');
  const [hearts, setHearts] = useState(5);
  const [xp, setXp] = useState(0);
  const [streak, setStreak] = useState(0);
  const [isCooldown, setIsCooldown] = useState(false);
  const [completedModules, setCompletedModules] = useState([]);

  // Constants
  const MAX_HEARTS = 5;
  const XP_CORRECT = 20;
  const XP_SPEED_BONUS = 10;

  // Actions
  const damageHeart = () => {
    if (hearts > 0) {
      setHearts(prev => prev - 1);
      setStreak(0);
    }
  };

  const restoreHeart = () => {
    if (hearts < MAX_HEARTS) {
      setHearts(prev => prev + 1);
    }
  };

  const addXp = (amount) => {
    setXp(prev => prev + amount);
  };

  const incrementStreak = () => {
    setStreak(prev => prev + 1);
  };

  const completeModule = (moduleId) => {
    if (!completedModules.includes(moduleId)) {
      setCompletedModules(prev => [...prev, moduleId]);
    }
  };

  const resetGame = () => {
    setHearts(MAX_HEARTS);
    setStreak(0);
    setIsCooldown(false);
  };

  // Check for "Margin Call"
  useEffect(() => {
    if (hearts === 0) {
      setIsCooldown(true);
    }
  }, [hearts]);

  const value = {
    userRank,
    setUserRank,
    currentSymbol,
    setCurrentSymbol,
    hearts,
    xp,
    streak,
    isCooldown,
    completedModules,
    damageHeart,
    restoreHeart,
    addXp,
    incrementStreak,
    completeModule,
    resetGame,
    setIsCooldown
  };

  return (
    <GameContext.Provider value={value}>
      {children}
    </GameContext.Provider>
  );
};
