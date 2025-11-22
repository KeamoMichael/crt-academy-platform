import React from 'react';
import { useGame } from '../../context/GameContext';
import { Lock, Check, Star, BookOpen } from 'lucide-react';
import { CURRICULUM } from '../../data/curriculum';
import '../../styles/CurriculumMap.css';

const CurriculumMap = ({ onSelectModule }) => {
    const { completedModules, difficulty } = useGame();

    // Helper to check if a module is locked
    const isModuleLocked = (module, index, allModules) => {
        if (index === 0) return false;
        const prevModule = allModules[index - 1];
        return !completedModules.includes(prevModule.id);
    };

    // Flatten curriculum for linear map
    const allModules = Object.values(CURRICULUM).flatMap(tier => tier.modules);

    return (
        <div className="map-container">
            <div className="map-path">
                {Object.values(CURRICULUM).map((tier, tierIndex) => (
                    <div key={tier.id} className="tier-section">
                        <div className="tier-header text-center mb-8">
                            <h2 className="text-2xl font-bold text-primary">{tier.title}</h2>
                            <p className="text-secondary">{tier.subtitle}</p>
                        </div>

                        <div className="modules-path">
                            {tier.modules.map((module, modIndex) => {
                                // Calculate global index for locking logic
                                const globalIndex = allModules.findIndex(m => m.id === module.id);
                                const locked = isModuleLocked(module, globalIndex, allModules);
                                const completed = completedModules.includes(module.id);

                                return (
                                    <div key={module.id} className="path-node-container">
                                        <button
                                            className={`path-node ${locked ? 'locked' : 'unlocked'} ${completed ? 'completed' : ''}`}
                                            onClick={() => !locked && onSelectModule(module.id)}
                                            disabled={locked}
                                        >
                                            {completed ? <Check size={32} /> : locked ? <Lock size={24} /> : <Star size={32} />}
                                        </button>
                                        <div className="node-label">
                                            <span className="font-bold">{module.title}</span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CurriculumMap;
