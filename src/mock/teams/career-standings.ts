import type { CareerStatistics } from '@/types/statistics';
import teams from './teams';

const teamsCareerStatistics: CareerStatistics[] = [
    {
        // ferrari
        participant: teams[0],
        enteredGrandPrix: 1120,
        highestFinishPlace: { position: 1, amoutOfTimes: 249 },
        highestGridPosition: { position: 1, amoutOfTimes: 254 },
        podiums: 639,
        point: 10639,
        polePosition: 254,
        worldChampionships: 16
    },
    {
        // mercedes
        participant: teams[1],
        enteredGrandPrix: 326,
        highestFinishPlace: { position: 1, amoutOfTimes: 122 },
        highestGridPosition: { position: 1, amoutOfTimes: 136 },
        podiums: 200,
        point: 8088.5,
        polePosition: 135,
        worldChampionships: 8
    },
    {
        // red bull
        participant: teams[3],
        enteredGrandPrix: 415,
        highestFinishPlace: { position: 1, amoutOfTimes: 127 },
        highestGridPosition: { position: 1, amoutOfTimes: 110 },
        podiums: 294,
        point: 8203,
        polePosition: 110,
        worldChampionships: 6
    },
    {
        participant: teams[3], // McLaren
        enteredGrandPrix: 992,
        highestFinishPlace: {
            position: 1,
            amoutOfTimes: 201
        },
        highestGridPosition: {
            position: 1,
            amoutOfTimes: 173
        },
        podiums: 552,
        point: 7607,
        polePosition: 174,
        worldChampionships: 10
    },
    {
        participant: teams[4], // Alpine
        enteredGrandPrix: 389,
        highestFinishPlace: {
            position: 1,
            amoutOfTimes: 21
        },
        highestGridPosition: {
            position: 1,
            amoutOfTimes: 20
        },
        podiums: 60,
        point: 2000,
        polePosition: 20,
        worldChampionships: 2
    },
    {
        participant: teams[5], // Kick Sauber
        dnf: 417 - 1,
        enteredGrandPrix: 417,
        highestFinishPlace: {
            position: 2,
            amoutOfTimes: 1
        },
        highestGridPosition: {
            position: 2,
            amoutOfTimes: 1
        },
        podiums: 1,
        point: 66,
        polePosition: 0,
        worldChampionships: 0
    },
    {
        participant: teams[6], // Aston Martin
        dnf: 115 - 27,
        enteredGrandPrix: 145,
        highestFinishPlace: {
            position: 1,
            amoutOfTimes: 1
        },
        highestGridPosition: {
            position: 1,
            amoutOfTimes: 1
        },
        podiums: 12,
        point: 846,
        polePosition: 1,
        worldChampionships: 0
    },
    {
        participant: teams[7], // Racing Bulls (Visa Cash App Racing Bulls)
        enteredGrandPrix: 396,
        highestFinishPlace: {
            position: 0,
            amoutOfTimes: 0
        },
        highestGridPosition: {
            position: 0,
            amoutOfTimes: 0
        },
        podiums: 0,
        point: 0,
        polePosition: 0,
        worldChampionships: 0
    },
    {
        participant: teams[8], // Haas
        enteredGrandPrix: 211,
        highestFinishPlace: {
            position: 4,
            amoutOfTimes: 2
        },
        highestGridPosition: {
            position: 4,
            amoutOfTimes: 1
        },
        podiums: 0,
        point: 377,
        polePosition: 1,
        worldChampionships: 0
    },
    {
        participant: teams[9], // Williams
        dnf: 402,
        enteredGrandPrix: 878,
        highestFinishPlace: {
            position: 1,
            amoutOfTimes: 114
        },
        highestGridPosition: {
            position: 1,
            amoutOfTimes: 128
        },
        podiums: 314,
        point: 3748,
        polePosition: 128,
        worldChampionships: 9
    }
];

export default teamsCareerStatistics;
