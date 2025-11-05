import { Driver, Team } from '.';

export type CareerStatistics = {
    participant: Driver | Team;
    dnf?: number;
    enteredGrandPrix: number;
    highestFinishPlace: {
        position: number;
        amoutOfTimes: number;
    };
    highestGridPosition: {
        position: number;
        amoutOfTimes: number;
    };
    podiums: number;
    point: number;
    polePosition: number;
    worldChampionships: number;
};

export type seasonStatistic = {
    participant: Driver | Team;
    position: number;
    totalPoints: number;

    grandPrix: {
        dnf: number;
        enteredRaces: number;
        fastestLaps: number;
        podiums: number;
        poles: number;
        top10s: number;
        wins: number;
    };

    sprint: {
        enteredRaces: number;
        podiums: number;
        points: number;
        poles: number;
        top10s: number;
        wins: number;
    };
};
