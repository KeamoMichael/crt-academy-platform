import React from 'react';
import { useGame } from '../../context/GameContext';
import { Heart, Zap, Trophy, Activity } from 'lucide-react';
import '../../styles/HUD.css';

const HUD = () => {
    const { userRank, currentSymbol, hearts, xp, streak } = useGame();

    return (
        <header className="hud-container">
            <div className="hud-content container">
                {/* Left: Identity */}
                <div className="hud-section">
                    <div className="hud-item">
                        <span className="hud-label">RANK</span>
                        <span className={`hud-value text-gold`}>{userRank.toUpperCase()}</span>
                    </div>
                    <div className="hud-divider">|</div>
                    <div className="hud-item">
                        <span className="hud-label">SYMBOL</span>
                        <span className="hud-value">{currentSymbol}</span>
                    </div>
                </div>

                {/* Center: Vitality */}
                <div className="hud-section">
                    <div className="hearts-display">
                        {[...Array(5)].map((_, i) => (
                            <Heart
                                key={i}
                                size={20}
                                className={i < hearts ? 'heart-filled' : 'heart-empty'}
                                fill={i < hearts ? '#ef4444' : 'none'}
                                color={i < hearts ? '#ef4444' : '#52525b'}
                            />
                        ))}
                    </div>
                </div>

                {/* Right: Performance */}
                <div className="hud-section">
                    <div className="hud-item">
                        <Zap size={16} className="text-blue" />
                        <span className="hud-value">{xp} XP</span>
                    </div>
                    <div className="hud-divider">|</div>
                    <div className="hud-item">
                        <Activity size={16} className={streak > 2 ? 'text-green' : 'text-muted'} />
                        <span className="hud-value">STREAK: {streak}</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HUD;
