export type Driver = {
    code: string;
    dateOfBirth: string;
    familyName: string;
    givenName: string;
    mugshotUrl: string;
    nationality: Nationality;
    permanentNumber: string;
    team: Team;
    url?: string;
};

export type GrandPrix = {
    dateStart: string;
    dateEnd: string;
    id: string;
    imageUrl?: string;
    laps: number;
    location: {
        nationality: Nationality;
        circuit: string;
    };
    name: string;
};

export type Team = {
    carImageUrl?: string;
    iconUrl?: string;
    id: string;
    name: string;
    nationality?: Nationality;
};

export type Nationality = {
    code: string;
    iconUrl: string;
    name: string;
};

export type RaceResult = {
    dateStart: string;
    dateEnd: string;
    grandPrix: GrandPrix;
    positions: {
        [position: number]: {
            driver: Driver;
            team: Team;
            points: number;
        };
    };
};
