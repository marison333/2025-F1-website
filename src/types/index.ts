export type Driver = {
    code: string;
    dateOfBirth: string;
    driverId: string;
    familyName: string;
    givenName: string;
    mugshotUrl: string;
    nationality: Nationality;
    permenentNumber: string;
    team: Team;
    url?: string;
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

