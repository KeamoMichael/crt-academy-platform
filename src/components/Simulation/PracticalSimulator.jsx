import React, { useState, useEffect } from 'react';
import { useGame } from '../../context/GameContext';
import { TrendingUp, Activity, Play, Pause } from 'lucide-react';
import '../../styles/PracticalSimulator.css';

const PracticalSimulator = ({ onExit }) => {
    const { chosenSymbol, pot, updatePot } = useGame();
    const [price, setPrice] = useState(15000.00);
    const [isPlaying, setIsPlaying] = useState(false);
    const [position, setPosition] = useState(null); // { type: 'long' | 'short', entryPrice: number }
    const [pnl, setPnl] = useState(0);

    // Mock Price Feed
    useEffect(() => {
        let interval;
        if (isPlaying) {
            interval = setInterval(() => {
                setPrice(prev => {
                    const change = (Math.random() - 0.5) * 10;
                    return prev + change;
                });
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isPlaying]);

    // PnL Calculation
    useEffect(() => {
        if (position) {
            const diff = price - position.entryPrice;
            const unrealized = position.type === 'long' ? diff * 10 : -diff * 10;
            setPnl(unrealized);
        } else {
            setPnl(0);
        }
    }, [price, position]);

    const handleBuy = () => {
        if (position) return;
        setPosition({ type: 'long', entryPrice: price });
    };

    const handleSell = () => {
        if (position) return;
        setPosition({ type: 'short', entryPrice: price });
    };

    const handleClose = () => {
        if (position) {
            updatePot(pnl);
            setPosition(null);
            setPnl(0);
        }
    };

    return (
        <div className="simulator-container">
            <div className="sim-header">
                <div className="flex items-center gap-4">
                    <Activity className="text-blue" />
                    <h2 className="text-xl font-bold">{chosenSymbol} LIVE SIMULATION</h2>
                </div>
                <button className="btn-text" onClick={onExit}>EXIT</button>
            </div>

            <div className="chart-area card flex-center">
                <div className="text-center">
                    <p className="text-secondary mb-2">CURRENT PRICE</p>
                    <h1 className="text-4xl font-mono font-bold mb-4">{price.toFixed(2)}</h1>
                    <div className="flex gap-4 justify-center">
                        <button
                            className="btn-outline"
                            onClick={() => setIsPlaying(!isPlaying)}
                        >
                            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                        </button>
                    </div>
                </div>
            </div>

            <div className="controls-area grid grid-cols-3 gap-4 mt-6">
                <button
                    className="btn-primary bg-green-500 hover:bg-green-600"
                    onClick={handleBuy}
                    disabled={!!position}
                >
                    BUY MARKET
                </button>

                <div className="stats-card card flex-col items-center justify-center">
                    <span className="text-xs text-secondary">UNREALIZED P&L</span>
                    <span className={`text-xl font-mono font-bold ${pnl >= 0 ? 'text-green' : 'text-red'}`}>
                        ${pnl.toFixed(2)}
                    </span>
                    {position && (
                        <button className="btn-text text-xs mt-2" onClick={handleClose}>CLOSE POSITION</button>
                    )}
                </div>

                <button
                    className="btn-primary bg-red-500 hover:bg-red-600"
                    onClick={handleSell}
                    disabled={!!position}
                >
                    SELL MARKET
                </button>
            </div>
        </div>
    );
};

export default PracticalSimulator;
