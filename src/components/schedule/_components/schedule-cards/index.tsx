import ScheduleCards from '@/types/schedule';
import { PreSeasonScheduleCard } from './_components/pre-season';
import { NextRaceScheduleCard } from './_components/next-race';
import { SummaryScheduleCard } from './_components/summery';
import { DefaultScheduleCard } from './_components/default';

type CardType = 'default' | 'next' | 'summary' | 'pre-season';

interface ScheduleCardProps extends ScheduleCards {
    type?: CardType;
    positions?: {
        [key: string]: {
            givenName: string;
            familyName: string;
        };
    };
}

const positions = {
    first: {
        givenName: 'max',
        familyName: 'verstappen'
    },
    second: {
        givenName: 'oscar',
        familyName: 'piastri'
    },
    third: {
        givenName: 'Lando',
        familyName: 'Norris'
    }
};

export const ScheduleCard = ({ race, round, type = 'default' }: ScheduleCardProps) => {
    if (type === 'pre-season') {
        return <PreSeasonScheduleCard race={race} round={round} />;
    }

    if (type === 'next') {
        return <NextRaceScheduleCard race={race} round={round} />;
    }

    if (type === 'summary') {
        return <SummaryScheduleCard race={race} round={round} positions={positions} />;
    }

    return <DefaultScheduleCard race={race} round={round} />;
};
