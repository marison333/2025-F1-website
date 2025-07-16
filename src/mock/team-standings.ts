import { TeamStanding } from '@/types/standings';
import teams from './teams';

const teamStandings: TeamStanding[] = [
    {
        1: {
            team: teams[0],
            points: 250
        }
    },
    {
        2: {
            team: teams[1],
            points: 200
        }
    },
    {
        3: {
            team: teams[2],
            points: 180
        }
    },
    {
        4: {
            team: teams[3],
            points: 150
        }
    },
    {
        5: {
            team: teams[4],
            points: 120
        }
    },
    {
        6: {
            team: teams[5],
            points: 100
        }
    },
    {
        7: {
            team: teams[6],
            points: 80
        }
    },
    {
        8: {
            team: teams[7],
            points: 60
        }
    },
    {
        9: {
            team: teams[8],
            points: 40
        }
    },
    {
        10: {
            team: teams[9],
            points: 20
        }
    }
];

export default teamStandings;
