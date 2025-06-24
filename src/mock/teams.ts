import { Team } from '../types/index';
import nationality from './nationality';

const teams: Team[] = [
    {
        id: 'ferrari',
        name: 'Scuderia Ferrari',
        nationality: nationality[2],
        carImageUrl:
            'https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000000/common/f1/2025/ferrari/2025ferraricarright.webp'
    },
    {
        id: 'mercedes',
        name: 'Mercedes-AMG Petronas Formula One Team',
        nationality: nationality[1],
        carImageUrl:
            'https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000000/common/f1/2025/mercedes/2025mercedescarright.webp'
    },
    {
        id: 'red-bull',
        name: 'Red Bull Racing',
        nationality: nationality[1],
        carImageUrl:
            'https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000000/common/f1/2025/redbull/2025redbullcarright.webp'
    },
    {
        id: 'mclaren',
        name: 'McLaren Formula 1 Team',
        nationality: nationality[1],
        carImageUrl:
            'https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000000/common/f1/2025/mclaren/2025mclarencarright.webp'
    },
    {
        id: 'alpine',
        name: 'BTW Alpine Formula 1 Team',
        nationality: nationality[1],
        carImageUrl:
            'https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000000/common/f1/2025/alpine/2025alpinecarright.webp'
    },
    {
        id: 'kick-sauber',
        name: 'Stake F1 Team Kick Sauber',
        nationality: nationality[11],
        carImageUrl:
            'https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000000/common/f1/2025/kicksauber/2025kicksaubercarright.webp'
    },
    {
        id: 'aston-martin',
        name: 'Aston Martin Aramco Formula One Team',
        nationality: nationality[1],
        carImageUrl:
            'https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000000/common/f1/2025/astonmartin/2025astonmartincarright.webp'
    },
    {
        id: 'racing-bulls',
        name: 'Visa Cash App racing Bulls Formula 1 Team',
        nationality: nationality[2],
        carImageUrl:
            'https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000000/common/f1/2025/racingbulls/2025racingbullscarright.webp'
    },
    {
        id: 'haas',
        name: 'MonetGram Haas F1 Team',
        nationality: nationality[4],
        carImageUrl:
            'https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000000/common/f1/2025/haas/2025haascarright.webp'
    },
    {
        id: 'williams',
        name: 'Atlassian Williams Racing',
        nationality: nationality[1],
        carImageUrl:
            'https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000000/common/f1/2025/williams/2025williamscarright.webp'
    }
];

export default teams;
