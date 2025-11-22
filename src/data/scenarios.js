export const SCENARIOS = {
    '1.1': {
        id: '1.1',
        title: 'The Open',
        frames: [
            {
                id: 1,
                time: '09:29 EST',
                price: '15200.00',
                context: 'We are 1 minute away from the Equities Open (09:30). Price is consolidating near the midnight open.',
                action: {
                    type: 'choice',
                    options: [
                        { id: 'A', text: 'Enter Long immediately', correct: false, feedback: 'Gambling. You have no time reference yet.' },
                        { id: 'B', text: 'Wait for 09:30 injection', correct: true, feedback: 'Correct. We wait for the bell.' },
                        { id: 'C', text: 'Short the highs', correct: false, feedback: 'Premature. Liquidity is about to be injected.' }
                    ]
                }
            },
            {
                id: 2,
                time: '09:30 EST',
                price: '15180.00',
                context: 'The bell rings. Price immediately drops 20 points, sweeping the pre-market lows.',
                action: {
                    type: 'choice',
                    options: [
                        { id: 'A', text: 'Chase the short', correct: false, feedback: 'You sold the low. This is likely a Judas Swing.' },
                        { id: 'B', text: 'Wait for displacement UP', correct: true, feedback: 'Good. We anticipate the reversal after the purge.' },
                        { id: 'C', text: 'Buy blindly', correct: false, feedback: 'Too risky. Wait for confirmation.' }
                    ]
                }
            }
        ]
    },
    '1.2': {
        id: '1.2',
        title: 'The Wick vs. The Body',
        frames: [
            {
                id: 1,
                time: '10:00 EST',
                price: '15250.00',
                context: 'Price hits a key resistance level. The 15m candle is about to close.',
                action: {
                    type: 'choice',
                    options: [
                        { id: 'A', text: 'Short now', correct: false, feedback: 'Wait for the close. Wicks do the damage, bodies tell the story.' },
                        { id: 'B', text: 'Wait for candle close', correct: true, feedback: 'Discipline. We need to see if it respects the level.' }
                    ]
                }
            },
            {
                id: 2,
                time: '10:15 EST',
                price: '15245.00',
                context: 'The candle closed leaving a long wick to the upside, but the body closed BELOW the level.',
                action: {
                    type: 'choice',
                    options: [
                        { id: 'A', text: 'Short (Rejection confirmed)', correct: true, feedback: 'Executed. The wick shows rejection, body shows acceptance lower.' },
                        { id: 'B', text: 'Buy (Breakout)', correct: false, feedback: 'Wrong. The body failed to close above. It is a trap.' }
                    ]
                }
            }
        ]
    },
    '1.3': {
        id: '1.3',
        title: 'The Range',
        frames: [
            {
                id: 1,
                time: '08:00 EST',
                price: '15100.00',
                context: 'Analyzing the previous daily candle. It was a large expansion candle up.',
                action: {
                    type: 'choice',
                    options: [
                        { id: 'A', text: 'Mark the High and Low', correct: true, feedback: 'Correct. These are our liquidity pools.' },
                        { id: 'B', text: 'Ignore it', correct: false, feedback: 'Lazy. Previous range defines today\'s boundaries.' }
                    ]
                }
            },
            {
                id: 2,
                time: '09:45 EST',
                price: '15090.00',
                context: 'Price trades below the Previous Day Low (PDL).',
                action: {
                    type: 'choice',
                    options: [
                        { id: 'A', text: 'Sell Breakout', correct: false, feedback: 'You are selling into a discount. Watch for a reversal.' },
                        { id: 'B', text: 'Wait for Reclaim of PDL', correct: true, feedback: 'Smart. If we reclaim the range, we target the High.' }
                    ]
                }
            }
        ]
    },
    '1.exam': {
        id: '1.exam',
        title: 'Exam: The Daily Profile',
        frames: [
            {
                id: 1,
                time: '00:00 EST',
                price: '15000.00',
                context: 'New Day. We are bullish on the weekly. What do we expect today?',
                action: {
                    type: 'choice',
                    options: [
                        { id: 'A', text: 'Consolidation', correct: false, feedback: 'Trend is bullish. We expect expansion.' },
                        { id: 'B', text: 'Expansion Up', correct: true, feedback: 'Correct. We look for a buy profile.' }
                    ]
                }
            },
            {
                id: 2,
                time: '02:00 EST (London)',
                price: '14980.00',
                context: 'London Open. Price drops below the midnight open.',
                action: {
                    type: 'choice',
                    options: [
                        { id: 'A', text: 'Panic Sell', correct: false, feedback: 'Weak hands. This is the manipulation.' },
                        { id: 'B', text: 'Identify as Manipulation (Judas)', correct: true, feedback: 'Yes. Power of 3: Accumulation, Manipulation, Distribution.' }
                    ]
                }
            },
            {
                id: 3,
                time: '08:30 EST (NY)',
                price: '14975.00',
                context: 'NY Open. We are still below midnight open. Market structure shifts bullish on 5m.',
                action: {
                    type: 'choice',
                    options: [
                        { id: 'A', text: 'Full Port Long', correct: true, feedback: 'Sniper Entry. Below open, bullish shift, in killzone.' },
                        { id: 'B', text: 'Wait for higher prices', correct: false, feedback: 'You missed the entry. You pay a premium now.' }
                    ]
                }
            }
        ]
    },
    // TIER 2 PLACEHOLDERS
    '2.1': {
        id: '2.1',
        title: 'The Pool',
        frames: [{ id: 1, time: '10:00 EST', price: '15000', context: 'Tier 2 Content Locked. Complete Tier 1 Exam to unlock.', action: { type: 'choice', options: [{ id: 'A', text: 'Exit', correct: true, feedback: 'Returning to base.' }] } }]
    },
    '2.2': {
        id: '2.2',
        title: 'Turtle Soup',
        frames: [{ id: 1, time: '10:00 EST', price: '15000', context: 'Tier 2 Content Locked.', action: { type: 'choice', options: [{ id: 'A', text: 'Exit', correct: true, feedback: 'Returning to base.' }] } }]
    },
    '2.3': {
        id: '2.3',
        title: 'Inducement',
        frames: [{ id: 1, time: '10:00 EST', price: '15000', context: 'Tier 2 Content Locked.', action: { type: 'choice', options: [{ id: 'A', text: 'Exit', correct: true, feedback: 'Returning to base.' }] } }]
    },
    '2.exam': {
        id: '2.exam',
        title: 'Exam: The Stop Raid',
        frames: [{ id: 1, time: '10:00 EST', price: '15000', context: 'Tier 2 Exam Locked.', action: { type: 'choice', options: [{ id: 'A', text: 'Exit', correct: true, feedback: 'Returning to base.' }] } }]
    },
    // TIER 3 PLACEHOLDERS
    '3.1': {
        id: '3.1',
        title: 'The Killzones',
        frames: [{ id: 1, time: '10:00 EST', price: '15000', context: 'Tier 3 Content Locked.', action: { type: 'choice', options: [{ id: 'A', text: 'Exit', correct: true, feedback: 'Returning to base.' }] } }]
    },
    '3.2': {
        id: '3.2',
        title: 'The Shift',
        frames: [{ id: 1, time: '10:00 EST', price: '15000', context: 'Tier 3 Content Locked.', action: { type: 'choice', options: [{ id: 'A', text: 'Exit', correct: true, feedback: 'Returning to base.' }] } }]
    },
    '3.3': {
        id: '3.3',
        title: 'The Standard Model',
        frames: [{ id: 1, time: '10:00 EST', price: '15000', context: 'Tier 3 Content Locked.', action: { type: 'choice', options: [{ id: 'A', text: 'Exit', correct: true, feedback: 'Returning to base.' }] } }]
    },
    '3.exam': {
        id: '3.exam',
        title: 'Exam: The Funded Challenge',
        frames: [{ id: 1, time: '10:00 EST', price: '15000', context: 'Tier 3 Exam Locked.', action: { type: 'choice', options: [{ id: 'A', text: 'Exit', correct: true, feedback: 'Returning to base.' }] } }]
    }
};
