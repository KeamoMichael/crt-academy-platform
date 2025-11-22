import React, { useState } from 'react';
import { useGame } from '../../context/GameContext';
import { ArrowRight, Check, TrendingUp, Shield, Clock, Target } from 'lucide-react';
import '../../styles/PlacementAssessment.css';

const PlacementAssessment = () => {
    const { setDifficulty, setChosenSymbol, setPlacementCompleted, setUserRank } = useGame();
    const [step, setStep] = useState('intro'); // intro, symbol, questions, result
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedSymbol, setSelectedSymbol] = useState(null);

    const questions = [
        {
            id: 1,
            text: "What dictates price movement?",
            options: [
                { text: "Buying and Selling pressure", score: 0 },
                { text: "Time and Liquidity", score: 2 },
                { text: "News and Fundamentals", score: 0 }
            ]
        },
        {
            id: 2,
            text: "A candle closes with a long wick to the upside. What does this likely indicate?",
            options: [
                { text: "Strong buying momentum", score: 0 },
                { text: "Rejection of higher prices", score: 2 },
                { text: "Indecision", score: 1 }
            ]
        },
        {
            id: 3,
            text: "What is 'Turtle Soup'?",
            options: [
                { text: "A slow moving market", score: 0 },
                { text: "A liquidity purge (False Breakout)", score: 3 },
                { text: "A trend continuation pattern", score: 0 }
            ]
        }
    ];

    const handleSymbolSelect = (symbol) => {
        setSelectedSymbol(symbol);
        setChosenSymbol(symbol);
        setStep('questions');
    };

    const handleAnswer = (questionScore) => {
        setScore(prev => prev + questionScore);
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(prev => prev + 1);
        } else {
            calculateResult(score + questionScore);
        }
    };

    const calculateResult = (finalScore) => {
        let level = 'Beginner';
        let rank = 'Apprentice';

        if (finalScore >= 6) {
            level = 'Advanced';
            rank = 'Sniper';
        } else if (finalScore >= 3) {
            level = 'Intermediate';
            rank = 'Hunter';
        }

        setDifficulty(level);
        setUserRank(rank);
        setStep('result');
    };

    const finishAssessment = () => {
        setPlacementCompleted(true);
    };

    if (step === 'intro') {
        return (
            <div className="assessment-container flex-center">
                <div className="card text-center" style={{ maxWidth: '600px' }}>
                    <h1 className="text-2xl mb-4">Welcome to CRT Academy</h1>
                    <p className="text-secondary mb-8">
                        Before we begin, we must assess your baseline logic.
                        This is not a test of memory, but of understanding.
                    </p>
                    <div className="grid-features mb-8">
                        <div className="feature-item">
                            <Clock className="text-blue" />
                            <span>Time-Based Logic</span>
                        </div>
                        <div className="feature-item">
                            <Shield className="text-green" />
                            <span>Risk Management</span>
                        </div>
                        <div className="feature-item">
                            <Target className="text-gold" />
                            <span>Precision Execution</span>
                        </div>
                    </div>
                    <button className="btn-primary w-full" onClick={() => setStep('symbol')}>
                        Begin Assessment
                    </button>
                </div>
            </div>
        );
    }

    if (step === 'symbol') {
        return (
            <div className="assessment-container flex-center">
                <div className="card text-center" style={{ maxWidth: '800px' }}>
                    <h2 className="text-xl mb-2">Choose Your Arena</h2>
                    <p className="text-secondary mb-8">
                        Select ONE asset class. This will be your permanent training ground.
                        You cannot change this later. Mastery requires focus.
                    </p>
                    <div className="symbol-grid">
                        {['NQ (Nasdaq)', 'ES (S&P 500)', 'BTC (Bitcoin)', 'EURUSD', 'XAUUSD (Gold)'].map((sym) => (
                            <button
                                key={sym}
                                className="symbol-card"
                                onClick={() => handleSymbolSelect(sym.split(' ')[0])}
                            >
                                <TrendingUp size={32} className="mb-2 text-blue" />
                                <span className="text-bold">{sym}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    if (step === 'questions') {
        const q = questions[currentQuestion];
        return (
            <div className="assessment-container flex-center">
                <div className="card" style={{ maxWidth: '600px', width: '100%' }}>
                    <div className="progress-bar mb-6">
                        <div
                            className="progress-fill"
                            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                        ></div>
                    </div>
                    <h3 className="text-lg mb-6 font-bold">Question {currentQuestion + 1} of {questions.length}</h3>
                    <p className="text-xl mb-8">{q.text}</p>
                    <div className="options-list flex-col gap-4">
                        {q.options.map((opt, idx) => (
                            <button
                                key={idx}
                                className="btn-outline text-left p-4"
                                onClick={() => handleAnswer(opt.score)}
                            >
                                {opt.text}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    if (step === 'result') {
        return (
            <div className="assessment-container flex-center">
                <div className="card text-center" style={{ maxWidth: '500px' }}>
                    <div className="mb-6 flex-center">
                        <div className="rank-badge">
                            <Target size={48} className="text-white" />
                        </div>
                    </div>
                    <h2 className="text-2xl font-bold mb-2">Assessment Complete</h2>
                    <p className="text-secondary mb-6">Your logic has been analyzed.</p>

                    <div className="result-box mb-8">
                        <div className="result-row">
                            <span className="text-secondary">Starting Rank:</span>
                            <span className="text-gold font-bold text-xl">{useGame().userRank}</span>
                        </div>
                        <div className="result-row">
                            <span className="text-secondary">Difficulty:</span>
                            <span className="text-blue font-bold text-xl">{useGame().difficulty}</span>
                        </div>
                        <div className="result-row">
                            <span className="text-secondary">Market:</span>
                            <span className="text-primary font-bold text-xl">{selectedSymbol}</span>
                        </div>
                    </div>

                    <button className="btn-primary w-full" onClick={finishAssessment}>
                        Enter the Academy
                    </button>
                </div>
            </div>
        );
    }

    return null;
};

export default PlacementAssessment;
