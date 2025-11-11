import type { seasonStatistic } from '@/types/statistics';
import drivers from '@/mock/drivers/drivers';

const seasonStatistic: seasonStatistic[] = [
    // drivers[0] - Lewis Hamilton
    {
        participant: drivers[0],
        position: 6,
        totalPoints: 148,
        grandPrix: {
            dnf: 0,
            enteredRaces: 0,
            fastestLaps: 0,
            podiums: 0,
            poles: 0,
            top10s: 0,
            wins: 0
        },
        sprint: { enteredRaces: 0, podiums: 0, points: 0, poles: 0, top10s: 0, wins: 0 }
    },
    // drivers[1] - Max Verstappen
    {
        participant: drivers[1],
        position: 3,
        totalPoints: 341,
        grandPrix: {
            dnf: 0,
            enteredRaces: 0,
            fastestLaps: 0,
            podiums: 11,
            poles: 7,
            top10s: 0,
            wins: 5
        },
        sprint: { enteredRaces: 0, podiums: 0, points: 0, poles: 0, top10s: 0, wins: 0 }
    },
    // drivers[2] - Charles Leclerc
    {
        participant: drivers[2],
        position: 5,
        totalPoints: 214,
        grandPrix: {
            dnf: 0,
            enteredRaces: 0,
            fastestLaps: 0,
            podiums: 7,
            poles: 1,
            top10s: 0,
            wins: 0
        },
        sprint: { enteredRaces: 0, podiums: 0, points: 0, poles: 0, top10s: 0, wins: 0 }
    },
    // drivers[3] - Carlos Sainz
    {
        participant: drivers[3],
        position: 13,
        totalPoints: 38,
        grandPrix: {
            dnf: 0,
            enteredRaces: 0,
            fastestLaps: 0,
            podiums: 1,
            poles: 0,
            top10s: 0,
            wins: 0
        },
        sprint: { enteredRaces: 0, podiums: 0, points: 0, poles: 0, top10s: 0, wins: 0 }
    },
    // drivers[4] - Lando Norris
    {
        participant: drivers[4],
        position: 1,
        totalPoints: 390,
        grandPrix: {
            dnf: 0,
            enteredRaces: 0,
            fastestLaps: 0,
            podiums: 16,
            poles: 6,
            top10s: 0,
            wins: 6
        },
        sprint: { enteredRaces: 0, podiums: 0, points: 0, poles: 0, top10s: 0, wins: 0 }
    },
    // drivers[5] - Fernando Alonso
    {
        participant: drivers[5],
        position: 12,
        totalPoints: 40,
        grandPrix: {
            dnf: 0,
            enteredRaces: 0,
            fastestLaps: 0,
            podiums: 0,
            poles: 0,
            top10s: 0,
            wins: 0
        },
        sprint: { enteredRaces: 0, podiums: 0, points: 0, poles: 0, top10s: 0, wins: 0 }
    },
    // drivers[6] - George Russell
    {
        participant: drivers[6],
        position: 4,
        totalPoints: 276,
        grandPrix: {
            dnf: 0,
            enteredRaces: 0,
            fastestLaps: 0,
            podiums: 8,
            poles: 2,
            top10s: 0,
            wins: 2
        },
        sprint: { enteredRaces: 0, podiums: 0, points: 0, poles: 0, top10s: 0, wins: 0 }
    },
    // drivers[7] - Esteban Ocon
    {
        participant: drivers[7],
        position: 16,
        totalPoints: 30,
        grandPrix: {
            dnf: 0,
            enteredRaces: 0,
            fastestLaps: 0,
            podiums: 0,
            poles: 0,
            top10s: 0,
            wins: 0
        },
        sprint: { enteredRaces: 0, podiums: 0, points: 0, poles: 0, top10s: 0, wins: 0 }
    },
    // drivers[8] - Pierre Gasly
    {
        participant: drivers[8],
        position: 18,
        totalPoints: 22,
        grandPrix: {
            dnf: 0,
            enteredRaces: 0,
            fastestLaps: 0,
            podiums: 0,
            poles: 0,
            top10s: 0,
            wins: 0
        },
        sprint: { enteredRaces: 0, podiums: 0, points: 0, poles: 0, top10s: 0, wins: 0 }
    },
    // drivers[9] - Yuki Tsunoda
    {
        participant: drivers[9],
        position: 17,
        totalPoints: 28,
        grandPrix: {
            dnf: 0,
            enteredRaces: 0,
            fastestLaps: 0,
            podiums: 0,
            poles: 0,
            top10s: 0,
            wins: 0
        },
        sprint: { enteredRaces: 0, podiums: 0, points: 0, poles: 0, top10s: 0, wins: 0 }
    },
    // drivers[10] - Alexander Albon
    {
        participant: drivers[10],
        position: 8,
        totalPoints: 73,
        grandPrix: {
            dnf: 0,
            enteredRaces: 0,
            fastestLaps: 0,
            podiums: 0,
            poles: 0,
            top10s: 0,
            wins: 0
        },
        sprint: { enteredRaces: 0, podiums: 0, points: 0, poles: 0, top10s: 0, wins: 0 }
    },
    // drivers[11] - Nico Hülkenberg
    {
        participant: drivers[11],
        position: 9,
        totalPoints: 43,
        grandPrix: {
            dnf: 0,
            enteredRaces: 0,
            fastestLaps: 0,
            podiums: 1,
            poles: 0,
            top10s: 0,
            wins: 0
        },
        sprint: { enteredRaces: 0, podiums: 0, points: 0, poles: 0, top10s: 0, wins: 0 }
    },
    // drivers[12] - Oscar Piastri
    {
        participant: drivers[12],
        position: 2,
        totalPoints: 366,
        grandPrix: {
            dnf: 0,
            enteredRaces: 0,
            fastestLaps: 0,
            podiums: 14,
            poles: 5,
            top10s: 0,
            wins: 7
        },
        sprint: { enteredRaces: 0, podiums: 0, points: 0, poles: 0, top10s: 0, wins: 0 }
    },
    // drivers[13] - Lance Stroll
    {
        participant: drivers[13],
        position: 15,
        totalPoints: 32,
        grandPrix: {
            dnf: 0,
            enteredRaces: 0,
            fastestLaps: 0,
            podiums: 0,
            poles: 0,
            top10s: 0,
            wins: 0
        },
        sprint: { enteredRaces: 0, podiums: 0, points: 0, poles: 0, top10s: 0, wins: 0 }
    },
    // drivers[14] - Kimi Antonelli
    {
        participant: drivers[14],
        position: 7,
        totalPoints: 122,
        grandPrix: {
            dnf: 0,
            enteredRaces: 0,
            fastestLaps: 0,
            podiums: 1,
            poles: 0,
            top10s: 0,
            wins: 0
        },
        sprint: { enteredRaces: 0, podiums: 0, points: 0, poles: 0, top10s: 0, wins: 0 }
    },
    // drivers[15] - Oliver Bearman
    {
        participant: drivers[15],
        position: 11,
        totalPoints: 40,
        grandPrix: {
            dnf: 0,
            enteredRaces: 0,
            fastestLaps: 0,
            podiums: 0,
            poles: 0,
            top10s: 0,
            wins: 0
        },
        sprint: { enteredRaces: 0, podiums: 0, points: 0, poles: 0, top10s: 0, wins: 0 }
    },
    // drivers[16] - Liam Lawson
    {
        participant: drivers[16],
        position: 14,
        totalPoints: 36,
        grandPrix: {
            dnf: 0,
            enteredRaces: 0,
            fastestLaps: 0,
            podiums: 0,
            poles: 0,
            top10s: 0,
            wins: 0
        },
        sprint: { enteredRaces: 0, podiums: 0, points: 0, poles: 0, top10s: 0, wins: 0 }
    },
    // drivers[17] - Isack Hadjar
    {
        participant: drivers[17],
        position: 10,
        totalPoints: 43,
        grandPrix: {
            dnf: 0,
            enteredRaces: 0,
            fastestLaps: 0,
            podiums: 1,
            poles: 0,
            top10s: 0,
            wins: 0
        },
        sprint: { enteredRaces: 0, podiums: 0, points: 0, poles: 0, top10s: 0, wins: 0 }
    },
    // drivers[18] - Gabriel Bortoleto
    {
        participant: drivers[18],
        position: 19,
        totalPoints: 19,
        grandPrix: {
            dnf: 0,
            enteredRaces: 0,
            fastestLaps: 0,
            podiums: 0,
            poles: 0,
            top10s: 0,
            wins: 0
        },
        sprint: { enteredRaces: 0, podiums: 0, points: 0, poles: 0, top10s: 0, wins: 0 }
    },
    // drivers[19] - Franco Colapinto
    {
        participant: drivers[19],
        position: 20,
        totalPoints: 0,
        grandPrix: {
            dnf: 0,
            enteredRaces: 0,
            fastestLaps: 0,
            podiums: 0,
            poles: 0,
            top10s: 0,
            wins: 0
        },
        sprint: { enteredRaces: 0, podiums: 0, points: 0, poles: 0, top10s: 0, wins: 0 }
    }
];

export default seasonStatistic;
