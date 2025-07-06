import { RaceResult } from '@/types';
import { getRandomGrandPrix } from './grand-prix';
import drivers from './drivers';
import teams from './teams';

const createMockRaceResult = (): RaceResult => {
    // F1 points system: positions 1-10 get points, 11-20 get 0
    const pointsSystem = [25, 18, 15, 12, 10, 8, 6, 4, 2, 1];
    const positions: RaceResult['positions'] = {};

    // Generate 20 positions (typical F1 race)
    for (let position = 1; position <= 20; position++) {
        positions[position] = {
            driver: drivers[Math.floor(Math.random() * drivers.length)],
            team: teams[Math.floor(Math.random() * teams.length)],
            // Points for positions 1-10, zero for 11-20
            points: position <= 10 ? pointsSystem[position - 1] : 0
        };
    }

    return {
        dateStart: '2025-03-15T14:00:00Z',
        dateEnd: '2025-03-15T16:30:00Z',
        grandPrix: getRandomGrandPrix(),
        positions
    };
};

export default createMockRaceResult;
