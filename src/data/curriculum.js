export const CURRICULUM = {
    TIER_1: {
        id: 'tier-1',
        title: 'THE APPRENTICE',
        subtitle: 'Market Anatomy',
        prerequisite: null,
        modules: [
            {
                id: '1.1',
                title: 'The Open',
                description: 'Identifying the 00:00 and 08:30 Opens',
                type: 'drill'
            },
            {
                id: '1.2',
                title: 'The Wick vs. The Body',
                description: 'Defining Rejection vs. Acceptance',
                type: 'drill'
            },
            {
                id: '1.3',
                title: 'The Range',
                description: 'Marking the High and Low of the previous candle',
                type: 'drill'
            },
            {
                id: '1.exam',
                title: 'The Daily Profile',
                description: 'Assemble a daily candle based on a text narrative',
                type: 'exam'
            }
        ]
    },
    TIER_2: {
        id: 'tier-2',
        title: 'THE HUNTER',
        subtitle: 'Liquidity & Traps',
        prerequisite: 'tier-1',
        modules: [
            {
                id: '2.1',
                title: 'The Pool',
                description: 'Spotting Clean Highs/Lows where stops reside',
                type: 'drill'
            },
            {
                id: '2.2',
                title: 'Turtle Soup',
                description: 'Identifying the False Breakout or Purge',
                type: 'drill'
            },
            {
                id: '2.3',
                title: 'Inducement',
                description: 'Identifying the move designed to trap retail traders',
                type: 'drill'
            },
            {
                id: '2.exam',
                title: 'The Stop Raid',
                description: 'Simulation: Wait for the raid before entering',
                type: 'exam'
            }
        ]
    },
    TIER_3: {
        id: 'tier-3',
        title: 'THE SNIPER',
        subtitle: 'Time & Execution',
        prerequisite: 'tier-2',
        modules: [
            {
                id: '3.1',
                title: 'The Killzones',
                description: 'London, NY AM, NY PM timing windows',
                type: 'drill'
            },
            {
                id: '3.2',
                title: 'The Shift',
                description: 'Market Structure Shift on lower timeframes',
                type: 'drill'
            },
            {
                id: '3.3',
                title: 'The Standard Model',
                description: 'Time + Raid + Shift + Retrace = Entry',
                type: 'drill'
            },
            {
                id: '3.exam',
                title: 'The Funded Challenge',
                description: 'Full session simulation',
                type: 'exam'
            }
        ]
    }
};
