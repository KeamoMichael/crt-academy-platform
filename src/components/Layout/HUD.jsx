import React from 'react';
import { useGame } from '../../context/GameContext';
import { DollarSign, Zap, Target, Shield } from 'lucide-react';
import '../../styles/HUD.css';

const HUD = () => {
    const { userRank, difficulty, pot, streak, chosenSymbol } = useGame();

    return (
        <header className="hud-container">
            <div className="hud-content container">
                {/* Left: Identity */}
                <div className="hud-section">
                    <div className="hud-item">
                        <Target size={20} className="text-gold" />
                        <div className="flex-col">
                            <span className="hud-label">RANK</span>
                            <span className="hud-value text-gold">{userRank.toUpperCase()}</span>
                        </div>
                    </div>
                    <div className="hud-divider"></div>
                    <div className="hud-item">
                        <span className="hud-label">MARKET</span>
                        <span className="hud-value">{chosenSymbol || '---'}</span>
                    </div>
                </div>

                {/* Center: The Pot (Health/Risk) */}
                <div className="hud-section">
                    <div className={`pot-display ${pot < 5000 ? 'danger' : ''}`}>
                        <Shield size={24} className={pot < 5000 ? 'text-red' : 'text-green'} />
                        <span className="pot-value">${pot.toLocaleString()}</span>
                    </div>
                </div>

                {/* Right: Performance */}
                <div className="hud-section">
                    <div className="hud-item">
                        <Zap size={20} className={streak > 2 ? 'text-blue' : 'text-muted'} />
                        <div className="flex-col">
                            <span className="hud-label">STREAK</span>
                            <span className="hud-value">{streak}</span>
                        </div>
                    </div>
                    <div className="hud-divider"></div>
                    <div className="hud-item">
                        <span className="hud-label">DIFFICULTY</span>
                        <span className="hud-value text-blue">{difficulty}</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HUD;
