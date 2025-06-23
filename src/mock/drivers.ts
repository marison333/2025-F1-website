import { Driver } from '../types/index';
import teams from './teams';
import nationality from './nationality';

const drivers: Driver[] = [
    {
        code: 'HAM',
        dateOfBirth: '1985-01-07',
        driverId: 'hamilton',
        familyName: 'Hamilton',
        givenName: 'Lewis',
        mugshotUrl:
            'https://media.formula1.com/image/upload/c_fill,w_720/q_auto/v1740000000/common/f1/2025/ferrari/lewham01/2025ferrarilewham01right.webp',
        nationality: nationality[1],
        permenentNumber: '44',
        team: teams[0],
        url: 'http://en.wikipedia.org/wiki/Lewis_Hamilton'
    },
    {
        code: 'VER',
        dateOfBirth: '1997-09-30',
        driverId: 'verstappen',
        familyName: 'Verstappen',
        givenName: 'Max',
        mugshotUrl:
            'https://media.formula1.com/image/upload/c_fill,w_720/q_auto/v1740000000/common/f1/2025/redbullracing/maxver01/2025redbullracingmaxver01right.webp',
        nationality: nationality[18],
        permenentNumber: '33',
        team: teams[2],
        url: 'http://en.wikipedia.org/wiki/Max_Verstappen'
    },
    {
        code: 'LEC',
        dateOfBirth: '1997-10-16',
        driverId: 'leclerc',
        familyName: 'Leclerc',
        givenName: 'Charles',
        mugshotUrl:
            'https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/ferrari/chalec01/2025ferrarichalec01right.webp',
        nationality: nationality[17],
        permenentNumber: '16',
        team: teams[0],
        url: 'http://en.wikipedia.org/wiki/Charles_Leclerc'
    },
    {
        code: 'SAI',
        dateOfBirth: '1994-09-01',
        driverId: 'sainz',
        familyName: 'Sainz',
        givenName: 'Carlos',
        mugshotUrl:
            'https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/williams/carsai01/2025williamscarsai01right.webp',
        nationality: nationality[5],
        permenentNumber: '55',
        team: teams[9],
        url: 'http://en.wikipedia.org/wiki/Carlos_Sainz_Jr.'
    },
    {
        code: 'NOR',
        dateOfBirth: '1999-11-13',
        driverId: 'norris',
        familyName: 'Norris',
        givenName: 'Lando',
        mugshotUrl:
            'https://media.formula1.com/image/upload/c_fill,w_720/q_auto/v1740000000/common/f1/2025/mclaren/lannor01/2025mclarenlannor01right.webp',
        nationality: nationality[1],
        permenentNumber: '4',
        team: teams[3],
        url: 'http://en.wikipedia.org/wiki/Lando_Norris'
    },
    {
        code: 'ALO',
        dateOfBirth: '1981-07-29',
        driverId: 'alonso',
        familyName: 'Alonso',
        givenName: 'Fernando',
        mugshotUrl:
            'https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/astonmartin/feralo01/2025astonmartinferalo01right.webp',
        nationality: nationality[5],
        permenentNumber: '14',
        team: teams[6],
        url: 'http://en.wikipedia.org/wiki/Fernando_Alonso'
    },
    {
        code: 'RUS',
        dateOfBirth: '1998-02-03',
        driverId: 'russell',
        familyName: 'Russell',
        givenName: 'George',
        mugshotUrl:
            'https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/mercedes/georus01/2025mercedesgeorus01right.webp',
        nationality: nationality[1],
        permenentNumber: '63',
        team: teams[1],
        url: 'http://en.wikipedia.org/wiki/George_Russell'
    },
    {
        code: 'OCO',
        dateOfBirth: '1996-09-17',
        driverId: 'ocon',
        familyName: 'Ocon',
        givenName: 'Esteban',
        mugshotUrl:
            'https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/alpine/estoco01/2025alpineestoco01right.webp',
        nationality: nationality[0],
        permenentNumber: '31',
        team: teams[8],
        url: 'http://en.wikipedia.org/wiki/Esteban_Ocon'
    },
    {
        code: 'GAS',
        dateOfBirth: '1996-06-07',
        driverId: 'gasly',
        familyName: 'Gasly',
        givenName: 'Pierre',
        mugshotUrl:
            'https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/alpine/piegas01/2025alpinepiegas01right.webp',
        nationality: nationality[0],
        permenentNumber: '10',
        team: teams[4],
        url: 'http://en.wikipedia.org/wiki/Pierre_Gasly'
    },
    {
        code: 'TSU',
        dateOfBirth: '2000-05-11',
        driverId: 'tsunoda',
        familyName: 'Tsunoda',
        givenName: 'Yuki',
        mugshotUrl:
            'https://media.formula1.com/image/upload/c_fill,w_720/q_auto/v1740000000/common/f1/2025/redbullracing/yuktsu01/2025redbullracingyuktsu01right.webp',
        nationality: nationality[7],
        permenentNumber: '22',
        team: teams[2],
        url: 'http://en.wikipedia.org/wiki/Yuki_Tsunoda'
    },
    {
        code: 'ALB',
        dateOfBirth: '1996-08-23',
        driverId: 'albon',
        familyName: 'Albon',
        givenName: 'Alexander',
        mugshotUrl:
            'https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/williams/alealb01/2025williamsalealb01right.webp',
        nationality: nationality[18],
        permenentNumber: '23',
        team: teams[9],
        url: 'http://en.wikipedia.org/wiki/Alexander_Albon'
    },
    {
        code: 'HUL',
        dateOfBirth: '1988-08-03',
        driverId: 'hulkenberg',
        familyName: 'Hülkenberg',
        givenName: 'Nico',
        mugshotUrl:
            'https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/kicksauber/nichul01/2025kicksaubernichul01right.webp',
        nationality: nationality[19],
        permenentNumber: '27',
        team: teams[5],
        url: 'http://en.wikipedia.org/wiki/Nico_H%C3%BClkenberg'
    },
    {
        code: 'PIA',
        dateOfBirth: '2001-04-06',
        driverId: 'piastri',
        familyName: 'Piastri',
        givenName: 'Oscar',
        mugshotUrl:
            'https://media.formula1.com/image/upload/c_fill,w_720/q_auto/v1740000000/common/f1/2025/mclaren/oscpia01/2025mclarenoscpia01right.webp',
        nationality: nationality[8],
        permenentNumber: '81',
        team: teams[3],
        url: 'http://en.wikipedia.org/wiki/Oscar_Piastri'
    },
    {
        code: 'STR',
        dateOfBirth: '1999-09-20',
        driverId: 'stroll',
        familyName: 'Stroll',
        givenName: 'Lance',
        mugshotUrl:
            'https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/astonmartin/lanstr01/2025astonmartinlanstr01right.webp',
        nationality: nationality[10],
        permenentNumber: '18',
        team: teams[6],
        url: 'http://en.wikipedia.org/wiki/Lance_Stroll'
    },
    {
        code: 'ANT',
        dateOfBirth: '2006-08-25',
        givenName: 'Kimi',
        familyName: 'Antonelli',
        driverId: 'antonelli',
        mugshotUrl:
            'https://media.formula1.com/image/upload/c_fill,w_720/q_auto/v1740000000/common/f1/2025/mercedes/andant01/2025mercedesandant01right.webp',
        nationality: nationality[2],
        permenentNumber: '12',
        team: teams[1],
        url: 'http://en.wikipedia.org/wiki/Kimi_Antonelli'
    },
    {
        code: 'BEA',
        dateOfBirth: '2005-05-08',
        givenName: 'Oliver',
        familyName: 'Bearman',
        driverId: 'bearman',
        mugshotUrl:
            'https://media.formula1.com/image/upload/c_fill,w_720/q_auto/v1740000000/common/f1/2025/haas/olibea01/2025haasolibea01right.webp',
        nationality: nationality[1],
        permenentNumber: '87',
        team: teams[8],
        url: 'http://en.wikipedia.org/wiki/Oliver_Bearman'
    },
    {
        code: 'LAW',
        dateOfBirth: '2002-02-11',
        givenName: 'Liam',
        familyName: 'Lawson',
        driverId: 'lawson',
        mugshotUrl:
            'https://media.formula1.com/image/upload/c_fill,w_720/q_auto/v1740000000/common/f1/2025/racingbulls/lialaw01/2025racingbullslialaw01right.webp',
        nationality: nationality[20],
        permenentNumber: '30',
        team: teams[7],
        url: 'http://en.wikipedia.org/wiki/Liam_Lawson'
    },
    {
        code: 'HAD',
        dateOfBirth: '2004-09-28',
        givenName: 'Isack',
        familyName: 'Hadjar',
        driverId: 'hadjar',
        mugshotUrl:
            'https://media.formula1.com/image/upload/c_fill,w_720/q_auto/v1740000000/common/f1/2025/racingbulls/isahad01/2025racingbullsisahad01right.webp',
        nationality: nationality[0],
        permenentNumber: '6',
        team: teams[7],
        url: 'http://en.wikipedia.org/wiki/Isack_Hadjar'
    },
    {
        code: 'BOR',
        dateOfBirth: '2004-10-14',
        givenName: 'Gabriel',
        familyName: 'Bortoleto',
        driverId: 'bortoleto',
        mugshotUrl:
            'https://media.formula1.com/image/upload/c_fill,w_720/q_auto/v1740000000/common/f1/2025/kicksauber/gabbor01/2025kicksaubergabbor01right.webp',
        nationality: nationality[9],
        permenentNumber: '5',
        team: teams[5],
        url: 'http://en.wikipedia.org/wiki/Gabriel_Bortoleto'
    },
    {
        code: 'COL',
        dateOfBirth: '2003-05-27',
        givenName: 'Franco',
        familyName: 'Colapinto',
        driverId: 'colapinto',
        mugshotUrl:
            'https://media.formula1.com/image/upload/c_fill,w_720/q_auto/v1740000000/common/f1/2025/alpine/fracol01/2025alpinefracol01right.webp',
        nationality: nationality[21],
        permenentNumber: '43',
        team: teams[4],
        url: 'http://en.wikipedia.org/wiki/Franco_Colapinto'
    }
];

export default drivers;
