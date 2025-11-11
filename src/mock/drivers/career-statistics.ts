import { CareerStatistics } from '@/types/statistics';
import drivers from '@/mock/drivers/drivers';

const careerStatistics: CareerStatistics[] = [
    // Lewis Hamilton
    {
        participant: drivers[0],
        dnf: 33,
        enteredGrandPrix: 376,
        highestFinishPlace: {
            position: 1,
            amoutOfTimes: 105
        },
        highestGridPosition: {
            position: 1,
            amoutOfTimes: 104
        },
        podiums: 202,
        point: 5008.5,
        polePosition: 104,
        worldChampionships: 7
    },
    // Max Verstappen
    {
        participant: drivers[1],
        dnf: 33,
        enteredGrandPrix: 229,
        highestFinishPlace: {
            position: 1,
            amoutOfTimes: 68
        },
        highestGridPosition: {
            position: 1,
            amoutOfTimes: 47
        },
        podiums: 123,
        point: 3344.5,
        polePosition: 47,
        worldChampionships: 4
    },
    // Charles Leclerc
    {
        participant: drivers[2],
        dnf: 22,
        enteredGrandPrix: 167,
        highestFinishPlace: {
            position: 1,
            amoutOfTimes: 8
        },
        highestGridPosition: {
            position: 1,
            amoutOfTimes: 27
        },
        podiums: 50,
        point: 1640,
        polePosition: 27,
        worldChampionships: 0
    },
    // Carlos Sainz
    {
        participant: drivers[3],
        dnf: 42,
        enteredGrandPrix: 227,
        highestFinishPlace: {
            position: 1,
            amoutOfTimes: 4
        },
        highestGridPosition: {
            position: 1,
            amoutOfTimes: 6
        },
        podiums: 28,
        point: 1310.5,
        polePosition: 6,
        worldChampionships: 0
    },
    // Lando Norris
    {
        participant: drivers[4],
        dnf: 18,
        enteredGrandPrix: 145,
        highestFinishPlace: {
            position: 1,
            amoutOfTimes: 11
        },
        highestGridPosition: {
            position: 1,
            amoutOfTimes: 15
        },
        podiums: 43,
        point: 1480,
        polePosition: 15,
        worldChampionships: 0
    },
    // Fernando Alonso
    {
        participant: drivers[5],
        dnf: 85,
        enteredGrandPrix: 405,
        highestFinishPlace: {
            position: 1,
            amoutOfTimes: 32
        },
        highestGridPosition: {
            position: 1,
            amoutOfTimes: 22
        },
        podiums: 106,
        point: 2323,
        polePosition: 22,
        worldChampionships: 2
    },
    // George Russell
    {
        participant: drivers[6],
        dnf: 15,
        enteredGrandPrix: 145,
        highestFinishPlace: {
            position: 1,
            amoutOfTimes: 5
        },
        highestGridPosition: {
            position: 1,
            amoutOfTimes: 7
        },
        podiums: 21,
        point: 870,
        polePosition: 7,
        worldChampionships: 0
    },
    // Esteban Ocon
    {
        participant: drivers[7],
        dnf: 28,
        enteredGrandPrix: 153,
        highestFinishPlace: {
            position: 1,
            amoutOfTimes: 1
        },
        highestGridPosition: {
            position: 1,
            amoutOfTimes: 0
        },
        podiums: 3,
        point: 445,
        polePosition: 0,
        worldChampionships: 0
    },
    // Pierre Gasly
    {
        participant: drivers[8],
        dnf: 35,
        enteredGrandPrix: 163,
        highestFinishPlace: {
            position: 1,
            amoutOfTimes: 1
        },
        highestGridPosition: {
            position: 1,
            amoutOfTimes: 0
        },
        podiums: 5,
        point: 450,
        polePosition: 0,
        worldChampionships: 0
    },
    // Yuki Tsunoda
    {
        participant: drivers[9],
        dnf: 18,
        enteredGrandPrix: 106,
        highestFinishPlace: {
            position: 4,
            amoutOfTimes: 1
        },
        highestGridPosition: {
            position: 7,
            amoutOfTimes: 1
        },
        podiums: 0,
        point: 145,
        polePosition: 0,
        worldChampionships: 0
    },
    // Alexander Albon
    {
        participant: drivers[10],
        dnf: 28,
        enteredGrandPrix: 130,
        highestFinishPlace: {
            position: 3,
            amoutOfTimes: 2
        },
        highestGridPosition: {
            position: 4,
            amoutOfTimes: 1
        },
        podiums: 2,
        point: 260,
        polePosition: 0,
        worldChampionships: 0
    },
    // Nico Hülkenberg
    {
        participant: drivers[11],
        dnf: 60,
        enteredGrandPrix: 245,
        highestFinishPlace: {
            position: 4,
            amoutOfTimes: 2
        },
        highestGridPosition: {
            position: 1,
            amoutOfTimes: 1
        },
        podiums: 0,
        point: 570,
        polePosition: 1,
        worldChampionships: 0
    },
    // Oscar Piastri
    {
        participant: drivers[12],
        dnf: 8,
        enteredGrandPrix: 66,
        highestFinishPlace: {
            position: 1,
            amoutOfTimes: 2
        },
        highestGridPosition: {
            position: 1,
            amoutOfTimes: 2
        },
        podiums: 12,
        point: 485,
        polePosition: 2,
        worldChampionships: 0
    },
    // Lance Stroll
    {
        participant: drivers[13],
        dnf: 35,
        enteredGrandPrix: 176,
        highestFinishPlace: {
            position: 3,
            amoutOfTimes: 3
        },
        highestGridPosition: {
            position: 1,
            amoutOfTimes: 1
        },
        podiums: 3,
        point: 295,
        polePosition: 1,
        worldChampionships: 0
    },
    // Kimi Antonelli (Rookie - estimated stats as of 2025)
    {
        participant: drivers[14],
        dnf: 2,
        enteredGrandPrix: 20,
        highestFinishPlace: {
            position: 2,
            amoutOfTimes: 1
        },
        highestGridPosition: {
            position: 4,
            amoutOfTimes: 1
        },
        podiums: 2,
        point: 110,
        polePosition: 0,
        worldChampionships: 0
    },
    // Oliver Bearman (Rookie - estimated stats as of 2025)
    {
        participant: drivers[15],
        dnf: 1,
        enteredGrandPrix: 22,
        highestFinishPlace: {
            position: 7,
            amoutOfTimes: 1
        },
        highestGridPosition: {
            position: 11,
            amoutOfTimes: 1
        },
        podiums: 0,
        point: 35,
        polePosition: 0,
        worldChampionships: 0
    },
    // Liam Lawson
    {
        participant: drivers[16],
        dnf: 2,
        enteredGrandPrix: 16,
        highestFinishPlace: {
            position: 9,
            amoutOfTimes: 1
        },
        highestGridPosition: {
            position: 10,
            amoutOfTimes: 1
        },
        podiums: 0,
        point: 12,
        polePosition: 0,
        worldChampionships: 0
    },
    // Isack Hadjar (Rookie - estimated stats as of 2025)
    {
        participant: drivers[17],
        dnf: 3,
        enteredGrandPrix: 20,
        highestFinishPlace: {
            position: 11,
            amoutOfTimes: 1
        },
        highestGridPosition: {
            position: 15,
            amoutOfTimes: 1
        },
        podiums: 0,
        point: 8,
        polePosition: 0,
        worldChampionships: 0
    },
    // Gabriel Bortoleto (Rookie - estimated stats as of 2025)
    {
        participant: drivers[18],
        dnf: 2,
        enteredGrandPrix: 20,
        highestFinishPlace: {
            position: 13,
            amoutOfTimes: 1
        },
        highestGridPosition: {
            position: 16,
            amoutOfTimes: 1
        },
        podiums: 0,
        point: 5,
        polePosition: 0,
        worldChampionships: 0
    },
    // Franco Colapinto
    {
        participant: drivers[19],
        dnf: 3,
        enteredGrandPrix: 29,
        highestFinishPlace: {
            position: 8,
            amoutOfTimes: 2
        },
        highestGridPosition: {
            position: 9,
            amoutOfTimes: 1
        },
        podiums: 0,
        point: 15,
        polePosition: 0,
        worldChampionships: 0
    }
];

export default careerStatistics;
