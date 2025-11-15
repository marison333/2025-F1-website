import type { seasonStatistic } from '@/types/statistics';
import teams from './teams';

const teamsSeasonStatistics: seasonStatistic[] = [
    // McLaren - Constructor Champions 2025
    {
        participant: teams[3], // mclaren
        position: 1,
        totalPoints: 756,
        grandPrix: {
            dnf: 2,
            enteredRaces: 42,
            fastestLaps: 11,
            podiums: 28,
            poles: 9,
            points: 720,
            top10s: 38,
            wins: 12
        },
        sprint: {
            enteredRaces: 6,
            podiums: 5,
            points: 36,
            poles: 2,
            top10s: 6,
            wins: 2
        }
    },

    // Mercedes - P2 in standings
    {
        participant: teams[1], // mercedes
        position: 2,
        totalPoints: 512,
        grandPrix: {
            dnf: 3,
            enteredRaces: 42,
            fastestLaps: 4,
            podiums: 18,
            poles: 1,
            points: 498,
            top10s: 32,
            wins: 1
        },
        sprint: {
            enteredRaces: 6,
            podiums: 2,
            points: 14,
            poles: 0,
            top10s: 4,
            wins: 0
        }
    },

    // Ferrari - P3 in standings
    {
        participant: teams[0], // ferrari
        position: 3,
        totalPoints: 478,
        grandPrix: {
            dnf: 5,
            enteredRaces: 42,
            fastestLaps: 2,
            podiums: 14,
            poles: 1,
            points: 455,
            top10s: 28,
            wins: 0
        },
        sprint: {
            enteredRaces: 6,
            podiums: 3,
            points: 23,
            poles: 1,
            top10s: 5,
            wins: 0
        }
    },

    // Red Bull Racing - P4 in standings
    {
        participant: teams[2], // red-bull
        position: 4,
        totalPoints: 445,
        grandPrix: {
            dnf: 4,
            enteredRaces: 42,
            fastestLaps: 2,
            podiums: 16,
            poles: 6,
            points: 428,
            top10s: 30,
            wins: 4
        },
        sprint: {
            enteredRaces: 6,
            podiums: 2,
            points: 17,
            poles: 1,
            top10s: 5,
            wins: 0
        }
    },

    // Williams - P5 in standings
    {
        participant: teams[9], // williams
        position: 5,
        totalPoints: 142,
        grandPrix: {
            dnf: 7,
            enteredRaces: 41,
            fastestLaps: 0,
            podiums: 0,
            poles: 0,
            points: 82,
            top10s: 10,
            wins: 0
        },
        sprint: {
            enteredRaces: 6,
            podiums: 0,
            points: 3,
            poles: 0,
            top10s: 1,
            wins: 0
        }
    },

    // Racing Bulls (VCARB) - P6 in standings
    {
        participant: teams[7], // racing-bulls
        position: 6,
        totalPoints: 98,
        grandPrix: {
            dnf: 8,
            enteredRaces: 42,
            fastestLaps: 0,
            podiums: 1,
            poles: 0,
            points: 94,
            top10s: 12,
            wins: 0
        },
        sprint: {
            enteredRaces: 6,
            podiums: 0,
            points: 4,
            poles: 0,
            top10s: 2,
            wins: 0
        }
    },

    // Aston Martin - P7 in standings
    {
        participant: teams[6],
        position: 7,
        totalPoints: 86,
        grandPrix: {
            dnf: 7,
            enteredRaces: 41,
            fastestLaps: 0,
            podiums: 0,
            points: 82,
            poles: 0,
            top10s: 10,
            wins: 0
        },
        sprint: {
            enteredRaces: 6,
            podiums: 0,
            points: 4,
            poles: 0,
            top10s: 1,
            wins: 0
        }
    },

    // Haas - P8 in standings
    {
        participant: teams[8], // haas
        position: 8,
        totalPoints: 64,
        grandPrix: {
            dnf: 9,
            enteredRaces: 42,
            fastestLaps: 0,
            podiums: 0,
            poles: 0,
            points: 58,
            top10s: 8,
            wins: 0
        },
        sprint: {
            enteredRaces: 6,
            podiums: 0,
            points: 6,
            poles: 0,
            top10s: 1,
            wins: 0
        }
    },

    // Kick Sauber - P9 in standings
    {
        participant: teams[5], // kick-sauber
        position: 9,
        totalPoints: 12,
        grandPrix: {
            dnf: 12,
            enteredRaces: 42,
            fastestLaps: 0,
            podiums: 0,
            poles: 0,
            points: 12,
            top10s: 2,
            wins: 0
        },
        sprint: {
            enteredRaces: 6,
            podiums: 0,
            points: 0,
            poles: 0,
            top10s: 0,
            wins: 0
        }
    },

    // Alpine - P10 in standings
    {
        participant: teams[4], // alpine
        position: 10,
        totalPoints: 8,
        grandPrix: {
            dnf: 15,
            enteredRaces: 42,
            fastestLaps: 0,
            podiums: 0,
            poles: 0,
            points: 7,
            top10s: 1,
            wins: 0
        },
        sprint: {
            enteredRaces: 6,
            podiums: 0,
            points: 1,
            poles: 0,
            top10s: 1,
            wins: 0
        }
    }
];

export default teamsSeasonStatistics;
