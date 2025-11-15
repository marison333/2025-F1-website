import type { seasonStatistic } from '@/types/statistics';
import drivers from '@/mock/drivers/drivers';

const seasonStatistic: seasonStatistic[] = [
    // drivers[0] - Lewis Hamilton
    {
        participant: drivers[0],
        position: 6,
        totalPoints: 148,
        grandPrix: {
            dnf: 2,
            enteredRaces: 21,
            fastestLaps: 3,
            podiums: 4,
            poles: 2,
            points: 127,
            top10s: 18,
            wins: 1
        },
        sprint: { enteredRaces: 5, podiums: 2, points: 21, poles: 1, top10s: 4, wins: 1 }
    },
    // drivers[1] - Max Verstappen
    {
        participant: drivers[1],
        position: 3,
        totalPoints: 341,
        grandPrix: {
            dnf: 1,
            enteredRaces: 21,
            fastestLaps: 4,
            podiums: 12,
            poles: 7,
            points: 314,
            top10s: 20,
            wins: 5
        },
        sprint: { enteredRaces: 5, podiums: 3, points: 27, poles: 2, top10s: 4, wins: 2 }
    },
    // drivers[2] - Charles Leclerc
    {
        participant: drivers[2],
        position: 5,
        totalPoints: 214,
        grandPrix: {
            dnf: 3,
            enteredRaces: 21,
            fastestLaps: 2,
            podiums: 7,
            points: 184,
            poles: 1,
            top10s: 16,
            wins: 2
        },
        sprint: { enteredRaces: 5, podiums: 1, points: 30, poles: 0, top10s: 3, wins: 1 }
    },
    // drivers[3] - Carlos Sainz
    {
        participant: drivers[3],
        position: 13,
        totalPoints: 38,
        grandPrix: {
            dnf: 2,
            enteredRaces: 18,
            fastestLaps: 0,
            podiums: 1,
            poles: 0,
            points: 38,
            top10s: 5,
            wins: 0
        },
        sprint: { enteredRaces: 4, podiums: 0, points: 0, poles: 0, top10s: 1, wins: 0 }
    },
    // drivers[4] - Lando Norris
    {
        participant: drivers[4],
        position: 1,
        totalPoints: 390,
        grandPrix: {
            dnf: 0,
            enteredRaces: 21,
            fastestLaps: 6,
            podiums: 16,
            poles: 6,
            points: 360,
            top10s: 21,
            wins: 8
        },
        sprint: { enteredRaces: 5, podiums: 4, points: 30, poles: 2, top10s: 5, wins: 2 }
    },
    // drivers[5] - Fernando Alonso
    {
        participant: drivers[5],
        position: 12,
        totalPoints: 40,
        grandPrix: {
            dnf: 1,
            enteredRaces: 19,
            fastestLaps: 1,
            podiums: 0,
            poles: 0,
            points: 40,
            top10s: 7,
            wins: 0
        },
        sprint: { enteredRaces: 4, podiums: 0, points: 0, poles: 0, top10s: 1, wins: 0 }
    },
    // drivers[6] - George Russell
    {
        participant: drivers[6],
        position: 4,
        totalPoints: 276,
        grandPrix: {
            dnf: 1,
            enteredRaces: 21,
            fastestLaps: 3,
            podiums: 8,
            poles: 2,
            points: 246,
            top10s: 18,
            wins: 2
        },
        sprint: { enteredRaces: 5, podiums: 2, points: 30, poles: 1, top10s: 4, wins: 1 }
    },
    // drivers[7] - Esteban Ocon
    {
        participant: drivers[7],
        position: 16,
        totalPoints: 30,
        grandPrix: {
            dnf: 2,
            enteredRaces: 20,
            fastestLaps: 0,
            podiums: 0,
            poles: 0,
            points: 30,
            top10s: 4,
            wins: 0
        },
        sprint: { enteredRaces: 5, podiums: 0, points: 0, poles: 0, top10s: 0, wins: 0 }
    },
    // drivers[8] - Pierre Gasly
    {
        participant: drivers[8],
        position: 18,
        totalPoints: 22,
        grandPrix: {
            dnf: 3,
            enteredRaces: 18,
            fastestLaps: 0,
            podiums: 0,
            poles: 0,
            points: 22,
            top10s: 3,
            wins: 0
        },
        sprint: { enteredRaces: 4, podiums: 0, points: 0, poles: 0, top10s: 0, wins: 0 }
    },
    // drivers[9] - Yuki Tsunoda
    {
        participant: drivers[9],
        position: 17,
        totalPoints: 28,
        grandPrix: {
            dnf: 2,
            enteredRaces: 20,
            fastestLaps: 0,
            podiums: 0,
            poles: 0,
            points: 28,
            top10s: 4,
            wins: 0
        },
        sprint: { enteredRaces: 4, podiums: 0, points: 0, poles: 0, top10s: 1, wins: 0 }
    },
    // drivers[10] - Alexander Albon
    {
        participant: drivers[10],
        position: 8,
        totalPoints: 73,
        grandPrix: {
            dnf: 1,
            enteredRaces: 21,
            fastestLaps: 1,
            podiums: 2,
            poles: 0,
            points: 68,
            top10s: 11,
            wins: 0
        },
        sprint: { enteredRaces: 5, podiums: 0, points: 5, poles: 0, top10s: 2, wins: 0 }
    },
    // drivers[11] - Nico Hülkenberg
    {
        participant: drivers[11],
        position: 9,
        totalPoints: 43,
        grandPrix: {
            dnf: 1,
            enteredRaces: 21,
            fastestLaps: 0,
            podiums: 1,
            poles: 0,
            points: 41,
            top10s: 9,
            wins: 0
        },
        sprint: { enteredRaces: 5, podiums: 0, points: 2, poles: 0, top10s: 1, wins: 0 }
    },
    // drivers[12] - Oscar Piastri
    {
        participant: drivers[12],
        position: 2,
        totalPoints: 366,
        grandPrix: {
            dnf: 0,
            enteredRaces: 21,
            fastestLaps: 5,
            podiums: 14,
            poles: 5,
            points: 336,
            top10s: 21,
            wins: 7
        },
        sprint: { enteredRaces: 5, podiums: 3, points: 30, poles: 1, top10s: 5, wins: 1 }
    },
    // drivers[13] - Lance Stroll
    {
        participant: drivers[13],
        position: 15,
        totalPoints: 32,
        grandPrix: {
            dnf: 2,
            enteredRaces: 19,
            fastestLaps: 0,
            podiums: 0,
            poles: 0,
            points: 32,
            top10s: 5,
            wins: 0
        },
        sprint: { enteredRaces: 4, podiums: 0, points: 0, poles: 0, top10s: 1, wins: 0 }
    },
    // drivers[14] - Kimi Antonelli
    {
        participant: drivers[14],
        position: 7,
        totalPoints: 122,
        grandPrix: {
            dnf: 1,
            enteredRaces: 21,
            fastestLaps: 1,
            podiums: 1,
            poles: 0,
            points: 112,
            top10s: 13,
            wins: 0
        },
        sprint: { enteredRaces: 5, podiums: 1, points: 10, poles: 0, top10s: 2, wins: 0 }
    },
    // drivers[15] - Oliver Bearman
    {
        participant: drivers[15],
        position: 11,
        totalPoints: 40,
        grandPrix: {
            dnf: 3,
            enteredRaces: 20,
            fastestLaps: 0,
            podiums: 0,
            poles: 0,
            points: 40,
            top10s: 6,
            wins: 0
        },
        sprint: { enteredRaces: 4, podiums: 0, points: 0, poles: 0, top10s: 0, wins: 0 }
    },
    // drivers[16] - Liam Lawson
    {
        participant: drivers[16],
        position: 14,
        totalPoints: 36,
        grandPrix: {
            dnf: 2,
            enteredRaces: 15,
            fastestLaps: 0,
            podiums: 0,
            poles: 0,
            points: 36,
            top10s: 4,
            wins: 0
        },
        sprint: { enteredRaces: 3, podiums: 0, points: 0, poles: 0, top10s: 1, wins: 0 }
    },
    // drivers[17] - Isack Hadjar
    {
        participant: drivers[17],
        position: 10,
        totalPoints: 43,
        grandPrix: {
            dnf: 2,
            enteredRaces: 21,
            fastestLaps: 0,
            podiums: 1,
            poles: 0,
            points: 39,
            top10s: 8,
            wins: 0
        },
        sprint: { enteredRaces: 5, podiums: 0, points: 4, poles: 0, top10s: 1, wins: 0 }
    },
    // drivers[18] - Gabriel Bortoleto
    {
        participant: drivers[18],
        position: 19,
        totalPoints: 19,
        grandPrix: {
            dnf: 3,
            enteredRaces: 18,
            fastestLaps: 0,
            podiums: 0,
            poles: 0,
            points: 19,
            top10s: 2,
            wins: 0
        },
        sprint: { enteredRaces: 4, podiums: 0, points: 0, poles: 0, top10s: 0, wins: 0 }
    },
    // drivers[19] - Franco Colapinto
    {
        participant: drivers[19],
        position: 20,
        totalPoints: 0,
        grandPrix: {
            dnf: 3,
            enteredRaces: 12,
            fastestLaps: 0,
            podiums: 0,
            poles: 0,
            points: 0,
            top10s: 0,
            wins: 0
        },
        sprint: { enteredRaces: 2, podiums: 0, points: 0, poles: 0, top10s: 0, wins: 0 }
    }
];

export default seasonStatistic;
