import React from 'react';
import { useGame } from '../../context/GameContext';
import { Lock, CheckCircle, PlayCircle } from 'lucide-react';
import { CURRICULUM } from '../../data/curriculum';
import '../../styles/CurriculumTree.css';

const CurriculumTree = ({ onSelectModule }) => {
    const { completedModules } = useGame();

    // Helper to check if a tier is unlocked
    const isTierUnlocked = (tier) => {
        if (!tier.prerequisite) return true;
        // Check if the prerequisite tier's exam is passed
        // This assumes the prerequisite string is 'tier-X' and the exam id is 'X.exam'
        const prevTierNum = tier.prerequisite.split('-')[1];
        return completedModules.includes(`${prevTierNum}.exam`);
    };

    return (
        <div className="curriculum-container">
            {Object.values(CURRICULUM).map((tier) => {
                const unlocked = isTierUnlocked(tier);
                return (
                    <div key={tier.id} className={`tier-section ${unlocked ? 'active' : 'locked'}`}>
                        <div className="tier-header">
                            <h2 className="tier-title">{tier.title}</h2>
                            <span className="tier-subtitle">{tier.subtitle}</span>
                            {!unlocked && <Lock size={16} className="text-muted" style={{ marginLeft: '10px' }} />}
                        </div>

                        <div className="modules-grid">
                            {tier.modules.map((module) => (
                                <div
                                    key={module.id}
                                    className="module-card"
                                    onClick={() => unlocked && onSelectModule(module.id)}
                                    style={{ cursor: unlocked ? 'pointer' : 'not-allowed' }}
                                >
                                    <div className="module-icon">
                                        {completedModules.includes(module.id) ? (
                                            <CheckCircle className="text-green" />
                                        ) : (
                                            <PlayCircle className={unlocked ? "text-blue" : "text-muted"} />
                                        )}
                                    </div>
                                    <div className="module-info">
                                        <h3>Module {module.id}</h3>
                                        <p>{module.title}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default CurriculumTree;
