export type Drivers = {
    driverId: string;
    permenentNumber: string;
    code: string;
    url?: string;
    givenName: string;
    familyName: string;
    dateOfBirth: string;
    nationality?: nationality[];
};

export type Teams = {
    id: string;
    name: string;
    nationality?: nationality[];
};

type nationality = {
    flag: [
        code: string,
        name: string
    ]
};

