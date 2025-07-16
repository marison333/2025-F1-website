import { Driver, Team } from '.';

export type TeamStanding = {
    [position: number]: {
        team: Team;
        points: number;
    };
};

export type DriverStanding = {
    [position: number]: {
        driver: Driver;
        points: number;
    };
};
