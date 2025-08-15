import { Team } from '../types/index';
import nationality from './nationality';

const teams: Team[] = [
    {
        id: 'ferrari',
        name: 'Scuderia Ferrari',
        nationality: nationality[2],
        carImageUrl:
            'https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000000/common/f1/2025/ferrari/2025ferraricarright.webp',
        iconUrl:
            'https://media.formula1.com/image/upload/c_fit,h_64/q_auto/v1740000000/common/f1/2025/ferrari/2025ferrarilogowhite.webp'
    },
    {
        id: 'mercedes',
        name: 'Mercedes-AMG Petronas Formula One Team',
        nationality: nationality[1],
        carImageUrl:
            'https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000000/common/f1/2025/mercedes/2025mercedescarright.webp',
        iconUrl:
            'https://media.formula1.com/image/upload/c_fit,h_64/q_auto/v1740000000/common/f1/2025/mercedes/2025mercedeslogowhite.webp'
    },
    {
        id: 'red-bull',
        name: 'Red Bull Racing',
        nationality: nationality[1],
        carImageUrl:
            'https://media.formula1.com/image/upload/c_lfill,h_224/q_auto/d_common:f1:2025:fallback:car:2025fallbackcarright.webp/v1740000000/common/f1/2025/redbullracing/2025redbullracingcarright.webp',
        iconUrl:
            'https://media.formula1.com/image/upload/c_fit,h_64/q_auto/v1740000000/common/f1/2025/redbullracing/2025redbullracinglogowhite.webp'
    },
    {
        id: 'mclaren',
        name: 'McLaren Formula 1 Team',
        nationality: nationality[1],
        carImageUrl:
            'https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000000/common/f1/2025/mclaren/2025mclarencarright.webp',
        iconUrl:
            'https://media.formula1.com/image/upload/c_fit,h_64/q_auto/v1740000000/common/f1/2025/mclaren/2025mclarenlogowhite.webp'
    },
    {
        id: 'alpine',
        name: 'BTW Alpine Formula 1 Team',
        nationality: nationality[1],
        carImageUrl:
            'https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000000/common/f1/2025/alpine/2025alpinecarright.webp',
        iconUrl:
            'https://media.formula1.com/image/upload/c_fit,h_64/q_auto/v1740000000/common/f1/2025/alpine/2025alpinelogowhite.webp'
    },
    {
        id: 'kick-sauber',
        name: 'Stake F1 Team Kick Sauber',
        nationality: nationality[11],
        carImageUrl:
            'https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000000/common/f1/2025/kicksauber/2025kicksaubercarright.webp',
        iconUrl:
            'https://media.formula1.com/image/upload/c_lfill,w_64/q_auto/v1740000000/common/f1/2025/kicksauber/2025kicksauberlogowhite.webp'
    },
    {
        id: 'aston-martin',
        name: 'Aston Martin Aramco Formula One Team',
        nationality: nationality[1],
        carImageUrl:
            'https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000000/common/f1/2025/astonmartin/2025astonmartincarright.webp',
        iconUrl:
            'https://media.formula1.com/image/upload/c_fit,h_64/q_auto/v1740000000/common/f1/2025/astonmartin/2025astonmartinlogowhite.webp'
    },
    {
        id: 'racing-bulls',
        name: 'Visa Cash App racing Bulls Formula 1 Team',
        nationality: nationality[2],
        carImageUrl:
            'https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000000/common/f1/2025/racingbulls/2025racingbullscarright.webp',
        iconUrl:
            'https://media.formula1.com/image/upload/c_fit,h_64/q_auto/v1740000000/common/f1/2025/racingbulls/2025racingbullslogowhite.webp'
    },
    {
        id: 'haas',
        name: 'MonetGram Haas F1 Team',
        nationality: nationality[4],
        carImageUrl:
            'https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000000/common/f1/2025/haas/2025haascarright.webp',
        iconUrl:
            'https://media.formula1.com/image/upload/c_fit,h_64/q_auto/v1740000000/common/f1/2025/haas/2025haaslogowhite.webp'
    },
    {
        id: 'williams',
        name: 'Atlassian Williams Racing',
        nationality: nationality[1],
        carImageUrl:
            'https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000000/common/f1/2025/williams/2025williamscarright.webp',
        iconUrl:
            'https://media.formula1.com/image/upload/c_fit,h_64/q_auto/v1740000000/common/f1/2025/williams/2025williamslogowhite.webp'
    }
];

export default teams;
