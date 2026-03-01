import { GrandPrix } from '@/types';
import { getDriverStandings } from './driver-standings';

export type RaceResultRow = {
    position: number;
    driver: string;
    team: string;
    time: string;
    points: number;
};

const buildWinnerTime = (raceId: string): string => {
    const seed = raceId.split('').reduce((total, char) => total + char.charCodeAt(0), 0);
    const hours = 1 + (seed % 2);
    const minutes = 25 + (seed % 20);
    const seconds = 10 + (seed % 45);
    const milliseconds = 100 + (seed % 900);

    return `${hours}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(milliseconds).padStart(3, '0')}`;
};

export async function getRaceResultsForRace(race: GrandPrix): Promise<RaceResultRow[]> {
    const standings = await getDriverStandings();
    const topTen = standings.slice(0, 10);
    const winnerTime = buildWinnerTime(race.id);

    return topTen.map((standing, index) => {
        const position = index + 1;
        const driver = `${standing.driver.givenName} ${standing.driver.familyName}`;
        const team = standing.driver.team.id.replace(/-/g, ' ');
        const gapSeconds = (index * 3.284 + 1.092).toFixed(3);
        const time = index === 0 ? winnerTime : `+${gapSeconds}s`;

        return {
            position,
            driver,
            team,
            time,
            points: standing.points
        };
    });
}
