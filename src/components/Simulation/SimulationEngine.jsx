import React, { useState, useEffect } from 'react';
import { useGame } from '../../context/GameContext';
import { SCENARIOS } from '../../data/scenarios';
import { ArrowRight, AlertTriangle, Check, X } from 'lucide-react';
import '../../styles/SimulationEngine.css';

const SimulationEngine = ({ module, onComplete, onExit }) => {
    const { addXp, damageHeart, incrementStreak, userRank, completeModule } = useGame();
    const [currentFrame, setCurrentFrame] = useState(0);
    const [feedback, setFeedback] = useState(null); // { type: 'success' | 'error' | 'info', message: '' }
    const [isComplete, setIsComplete] = useState(false);

    // Load scenario from data
    const scenario = SCENARIOS[module?.id];

    useEffect(() => {
        if (isComplete && module?.id) {
            completeModule(module.id);
        }
    }, [isComplete, module, completeModule]);

    if (!scenario) {
        return (
            <div className="simulation-container flex-center">
                <div className="completion-card">
                    <AlertTriangle size={48} className="text-gold" />
                    <h2>Scenario Not Found</h2>
                    <p>The scenario for module {module?.id} is under construction.</p>
                    <button className="btn-primary" onClick={onExit}>Return to Dashboard</button>
                </div>
            </div>
        );
    }

    const handleOptionSelect = (option) => {
        if (feedback) return; // Prevent multiple clicks

        if (option.correct) {
            setFeedback({ type: 'success', message: option.feedback });
            addXp(20);
            incrementStreak();

            setTimeout(() => {
                setFeedback(null);
                if (currentFrame < scenario.frames.length - 1) {
                    setCurrentFrame(prev => prev + 1);
                } else {
                    setIsComplete(true);
                }
            }, 2000);
        } else {
            setFeedback({ type: 'error', message: option.feedback });
            damageHeart();
            // Don't advance frame on error, maybe restart or allow retry?
            // For now, just clear feedback after delay
            setTimeout(() => setFeedback(null), 2000);
        }
    };

    if (isComplete) {
        return (
            <div className="simulation-container flex-center">
                <div className="completion-card">
                    <Check size={48} className="text-green" />
                    <h2>Module Complete</h2>
                    <button className="btn-primary" onClick={onComplete}>Return to Dashboard</button>
                </div>
            </div>
        );
    }

    const frame = scenario.frames[currentFrame];

    return (
        <div className="simulation-container">
            <div className="simulation-header">
                <div className="sim-meta">
                    <span className="sim-label">SCENARIO</span>
                    <span className="sim-value">{scenario.title}</span>
                </div>
                <button className="btn-text" onClick={onExit}>EXIT</button>
            </div>

            <div className="sim-frame">
                <div className="frame-header">
                    <div className="sim-meta">
                        <span className="sim-label">TIME</span>
                        <span className="sim-value">{frame.time}</span>
                    </div>
                    <div className="sim-meta">
                        <span className="sim-label">PRICE</span>
                        <span className="sim-value">{frame.price}</span>
                    </div>
                </div>

                <div className="frame-context">
                    <p>{frame.context}</p>
                </div>

                <div className="frame-action">
                    <h3>⚡ ACTION REQUIRED</h3>
                    <div className="options-grid">
                        {frame.action.options.map((option) => (
                            <button
                                key={option.id}
                                className={`option-btn ${feedback ? (option.correct ? 'correct' : 'incorrect') : ''}`}
                                onClick={() => handleOptionSelect(option)}
                                disabled={!!feedback}
                            >
                                <span className="option-id">{option.id}</span>
                                <span className="option-text">{option.text}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {feedback && (
                <div className={`feedback-overlay ${feedback.type}`}>
                    <div className="feedback-content">
                        {feedback.type === 'success' ? <Check size={24} /> : <AlertTriangle size={24} />}
                        <p>{feedback.message}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SimulationEngine;
