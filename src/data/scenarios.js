export const SCENARIOS = {
    // FOUNDATIONS
    '1.1': {
        id: '1.1',
        title: 'Time & Price',
        frames: [
            {
                id: 1,
                time: '09:29 EST',
                price: '15200.00',
                context: 'The market is about to open. Why does price move?',
                action: {
                    type: 'choice',
                    options: [
                        { id: 'A', text: 'Because of buyers and sellers.', correct: false, feedback: 'Incorrect. That is the retail myth.' },
                        { id: 'B', text: 'Because Time dictates it.', correct: true, feedback: 'Correct. Time is the parent, Price is the child.' }
                    ]
                }
            },
            {
                id: 2,
                time: '09:30 EST',
                price: '15180.00',
                context: 'The bell rings. Volatility injects immediately.',
                action: {
                    type: 'choice',
                    options: [
                        { id: 'A', text: 'Wait for the algorithm to reveal its hand.', correct: true, feedback: 'Patience pays.' },
                        { id: 'B', text: 'Chase the move.', correct: false, feedback: 'Impatience bleeds.' }
                    ]
                }
            }
        ]
    },
    '1.2': {
        id: '1.2',
        title: 'Liquidity as Fuel',
        frames: [
            {
                id: 1,
                time: '10:00 EST',
                price: '15250.00',
                context: 'We see a clean double top. What resides above it?',
                action: {
                    type: 'choice',
                    options: [
                        { id: 'A', text: 'Resistance.', correct: false, feedback: 'Retail sees resistance. We see fuel.' },
                        { id: 'B', text: 'Buy Stops (Liquidity).', correct: true, feedback: 'Correct. The market seeks this fuel.' }
                    ]
                }
            }
        ]
    },
    '1.3': {
        id: '1.3',
        title: 'The Candle Map',
        frames: [
            {
                id: 1,
                time: 'Daily Close',
                price: '---',
                context: 'A candle has four data points. Which is most important for bias?',
                action: {
                    type: 'choice',
                    options: [
                        { id: 'A', text: 'The Close.', correct: true, feedback: 'The Close tells us who won.' },
                        { id: 'B', text: 'The High.', correct: false, feedback: 'The high is just a wick.' }
                    ]
                }
            }
        ]
    },
    '1.exam': {
        id: '1.exam',
        title: 'Exam: Market Physics',
        frames: [
            {
                id: 1,
                time: 'Exam Question 1',
                price: '---',
                context: 'If Time is the Parent, what is Price?',
                action: {
                    type: 'choice',
                    options: [
                        { id: 'A', text: 'The Child.', correct: true, feedback: 'Correct.' },
                        { id: 'B', text: 'The Boss.', correct: false, feedback: 'Wrong.' }
                    ]
                }
            }
        ]
    },
    // CANDLES (Placeholders)
    '2.1': { id: '2.1', title: 'Wick vs Body', frames: [{ id: 1, time: '---', price: '---', context: 'Lesson Locked.', action: { options: [{ id: 'A', text: 'Exit', correct: true }] } }] },
    '2.2': { id: '2.2', title: 'The Daily Range', frames: [{ id: 1, time: '---', price: '---', context: 'Lesson Locked.', action: { options: [{ id: 'A', text: 'Exit', correct: true }] } }] },
    '2.3': { id: '2.3', title: 'Premium vs Discount', frames: [{ id: 1, time: '---', price: '---', context: 'Lesson Locked.', action: { options: [{ id: 'A', text: 'Exit', correct: true }] } }] },
    '2.exam': { id: '2.exam', title: 'Exam: Range Analysis', frames: [{ id: 1, time: '---', price: '---', context: 'Exam Locked.', action: { options: [{ id: 'A', text: 'Exit', correct: true }] } }] },
    // TIME (Placeholders)
    '3.1': { id: '3.1', title: 'The Killzones', frames: [{ id: 1, time: '---', price: '---', context: 'Lesson Locked.', action: { options: [{ id: 'A', text: 'Exit', correct: true }] } }] },
    '3.2': { id: '3.2', title: 'The 90-Minute Cycle', frames: [{ id: 1, time: '---', price: '---', context: 'Lesson Locked.', action: { options: [{ id: 'A', text: 'Exit', correct: true }] } }] },
    '3.3': { id: '3.3', title: 'The Open', frames: [{ id: 1, time: '---', price: '---', context: 'Lesson Locked.', action: { options: [{ id: 'A', text: 'Exit', correct: true }] } }] },
    '3.exam': { id: '3.exam', title: 'Exam: Time Mastery', frames: [{ id: 1, time: '---', price: '---', context: 'Exam Locked.', action: { options: [{ id: 'A', text: 'Exit', correct: true }] } }] },
    // LOGIC (Placeholders)
    '4.1': { id: '4.1', title: 'Turtle Soup', frames: [{ id: 1, time: '---', price: '---', context: 'Lesson Locked.', action: { options: [{ id: 'A', text: 'Exit', correct: true }] } }] },
    '4.2': { id: '4.2', title: 'Inducement', frames: [{ id: 1, time: '---', price: '---', context: 'Lesson Locked.', action: { options: [{ id: 'A', text: 'Exit', correct: true }] } }] },
    '4.3': { id: '4.3', title: 'Market Structure Shift', frames: [{ id: 1, time: '---', price: '---', context: 'Lesson Locked.', action: { options: [{ id: 'A', text: 'Exit', correct: true }] } }] },
    '4.exam': { id: '4.exam', title: 'Exam: The Trap', frames: [{ id: 1, time: '---', price: '---', context: 'Exam Locked.', action: { options: [{ id: 'A', text: 'Exit', correct: true }] } }] }
};
