import React, { useState, useEffect } from 'react';
import { useGame } from '../../context/GameContext';
import { SCENARIOS } from '../../data/scenarios';
import { ArrowRight, AlertTriangle, Check, X, Lock, Eye } from 'lucide-react';
import '../../styles/LessonEngine.css';

const LessonEngine = ({ module, onComplete, onExit }) => {
    const { addXp, updatePot, incrementStreak, resetStreak, difficulty, setRestore, completeModule } = useGame();
    const [currentFrame, setCurrentFrame] = useState(0);
    const [feedback, setFeedback] = useState(null); // { type: 'success' | 'error' | 'hint', message: '' }
    const [attempts, setAttempts] = useState(0);
    const [isComplete, setIsComplete] = useState(false);
    const [showAnswer, setShowAnswer] = useState(false);

    // Load scenario from data
    const scenario = SCENARIOS[module?.id];

    useEffect(() => {
        if (isComplete && module?.id) {
            completeModule(module.id);
        }
    }, [isComplete, module, completeModule]);

    // Restore Point Logic: Save progress on every frame change
    useEffect(() => {
        if (module?.id) {
            setRestore(module.id, currentFrame);
        }
    }, [currentFrame, module, setRestore]);

    if (!scenario) {
        return (
            <div className="lesson-container flex-center">
                <div className="card text-center">
                    <AlertTriangle size={48} className="text-gold mx-auto mb-4" />
                    <h2 className="text-xl font-bold">Lesson Not Found</h2>
                    <p className="text-secondary mb-4">Under Construction.</p>
                    <button className="btn-primary" onClick={onExit}>Return to Map</button>
                </div>
            </div>
        );
    }

    const handleOptionSelect = (option) => {
        if (feedback && feedback.type === 'success') return; // Prevent clicks after success

        if (option.correct) {
            // Success Logic
            setFeedback({ type: 'success', message: option.feedback });
            addXp(20);
            incrementStreak();

            setTimeout(() => {
                setFeedback(null);
                setAttempts(0);
                setShowAnswer(false);
                if (currentFrame < scenario.frames.length - 1) {
                    setCurrentFrame(prev => prev + 1);
                } else {
                    setIsComplete(true);
                }
            }, 2000);
        } else {
            // Failure Logic
            const newAttempts = attempts + 1;
            setAttempts(newAttempts);
            resetStreak();
            updatePot(-50); // Deduct from Pot

            if (newAttempts >= 3) {
                // Reveal Answer after 3 fails
                setFeedback({ type: 'error', message: "Maximum attempts reached. Study the answer." });
                setShowAnswer(true);
            } else if (newAttempts === 2) {
                // Strong Hint
                setFeedback({ type: 'hint', message: "Hint: " + (option.hint || "Re-read the context carefully.") });
            } else {
                // First Fail
                setFeedback({ type: 'error', message: option.feedback || "Incorrect logic." });
            }
        }
    };

    if (isComplete) {
        return (
            <div className="lesson-container flex-center">
                <div className="card text-center">
                    <Check size={48} className="text-green mx-auto mb-4" />
                    <h2 className="text-2xl font-bold mb-2">Lesson Complete</h2>
                    <p className="text-secondary mb-6">Logic Reinforced.</p>
                    <button className="btn-primary w-full" onClick={onComplete}>Continue</button>
                </div>
            </div>
        );
    }

    const frame = scenario.frames[currentFrame];

    return (
        <div className="lesson-container">
            <div className="lesson-header">
                <div className="flex-col">
                    <span className="text-xs text-secondary uppercase tracking-wider">Lesson</span>
                    <span className="text-lg font-bold">{scenario.title}</span>
                </div>
                <button className="btn-text text-secondary hover:text-primary" onClick={onExit}>EXIT</button>
            </div>

            <div className="lesson-frame card">
                <div className="frame-header flex justify-between mb-6 border-b pb-4">
                    <div className="flex-col">
                        <span className="text-xs text-secondary">TIME</span>
                        <span className="font-mono font-bold">{frame.time}</span>
                    </div>
                    <div className="flex-col text-right">
                        <span className="text-xs text-secondary">PRICE</span>
                        <span className="font-mono font-bold">{frame.price}</span>
                    </div>
                </div>

                <div className="frame-context mb-8 pl-4 border-l-4 border-blue-500">
                    <p className="text-lg leading-relaxed">{frame.context}</p>
                </div>

                <div className="frame-action">
                    <h3 className="text-sm font-bold text-gold mb-4 flex items-center gap-2">
                        <Eye size={16} /> ACTION REQUIRED
                    </h3>
                    <div className="options-grid grid gap-4">
                        {frame.action.options.map((option) => (
                            <button
                                key={option.id}
                                className={`option-btn p-4 border rounded-lg text-left transition-all
                  ${showAnswer && option.correct ? 'bg-green-50 border-green-500' : 'hover:bg-slate-50'}
                  ${feedback?.type === 'error' && !option.correct && attempts > 0 ? 'opacity-50' : ''}
                `}
                                onClick={() => handleOptionSelect(option)}
                                disabled={feedback?.type === 'success' || (showAnswer && !option.correct)}
                            >
                                <div className="flex items-center gap-3">
                                    <span className="font-mono font-bold text-secondary">{option.id}</span>
                                    <span>{option.text}</span>
                                    {showAnswer && option.correct && <Check size={16} className="text-green ml-auto" />}
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {feedback && (
                <div className={`feedback-overlay fixed bottom-8 left-1/2 -translate-x-1/2 w-11/12 max-w-2xl p-4 rounded-lg shadow-lg z-50
          ${feedback.type === 'success' ? 'bg-green-100 text-green-800 border border-green-200' : ''}
          ${feedback.type === 'error' ? 'bg-red-100 text-red-800 border border-red-200' : ''}
          ${feedback.type === 'hint' ? 'bg-blue-100 text-blue-800 border border-blue-200' : ''}
        `}>
                    <div className="flex items-center gap-3 font-bold">
                        {feedback.type === 'success' && <Check size={20} />}
                        {feedback.type === 'error' && <AlertTriangle size={20} />}
                        {feedback.type === 'hint' && <Lock size={20} />}
                        <p>{feedback.message}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LessonEngine;
