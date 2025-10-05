import Link from 'next/link';

import { GrandPrix } from '@/types';
import formatDateRange from '@/utils/date-formatter';

import { Card } from '@/components/ui/card';
import { FlagIcon } from '@/components/flag';

interface ScheduleCardProps {
    race: GrandPrix;
    round: number;
}

export const ScheduleCard = ({ race, round }: ScheduleCardProps) => {
    const title = race.id.replace(/-/g, ' ').replace(/\sgp$/i, '');
    const link = race.id.replace('-gp', '');

    const defaultContent = ({race, round}: ScheduleCardProps) => (
        <span className='relative size-full [&>span]:w-full flex flex-col [&>span]:flex justify-between'>
            <span className='flex-col justify-start gap-1.5'>
                <span className='uppercase text-sm'>{`round ${round}`}</span>
                <span className='flex items-center gap-1'>
                    <span>
                        <FlagIcon
                            name={race.location.nationality.name}
                            iconUrl={race.location.nationality.code}
                        />
                    </span>
                    <span className='capitalize text-3xl font-bold group-hover:underline'>
                        {title}
                    </span>
                </span>
                <span className='text-sm font-bold capitalize'>{race.name}</span>
            </span>
            <span className='justify-start'>
                <span className='text-xl font-bold uppercase'>
                    {formatDateRange(race.dateStart, race.dateEnd)}
                </span>
            </span>
        </span>
    );

    const nextRaceContent = ({ race, round }: ScheduleCardProps) => (
        <span className='relative size-full [&>span]:w-full flex flex-col [&>span]:flex justify-between'>
            <span className='flex-col justify-start gap-1.5'>
                <span className='uppercase text-sm'>{`round ${round}`}</span>
                <span className='flex items-center gap-1'>
                    <span>
                        <FlagIcon
                            name={race.location.nationality.name}
                            iconUrl={race.location.nationality.code}
                        />
                    </span>
                    <span className='capitalize text-3xl font-bold group-hover:underline'>
                        {title}
                    </span>
                </span>
                <span className='text-sm font-bold capitalize'>{race.name}</span>
            </span>
            <span className='justify-start'>
                <span className='text-xl font-bold uppercase'>
                    {formatDateRange(race.dateStart, race.dateEnd)}
                </span>
            </span>
        </span>
    );

    const resultsContent = ({ race, round }: ScheduleCardProps) => (
        <span className='relative size-full [&>span]:w-full flex flex-col [&>span]:flex justify-between'>
            <span className='flex-col justify-start gap-1.5'>
                <span className='uppercase text-sm'>{`round ${round}`}</span>
                <span className='flex items-center gap-1'>
                    <span>
                        <FlagIcon
                            name={race.location.nationality.name}
                            iconUrl={race.location.nationality.code}
                        />
                    </span>
                    <span className='capitalize text-3xl font-bold group-hover:underline'>
                        {title}
                    </span>
                </span>
                <span className='text-sm font-bold capitalize'>{race.name}</span>
            </span>
            <span className='justify-start'>
                <span className='text-xl font-bold uppercase'>
                    {formatDateRange(race.dateStart, race.dateEnd)}
                </span>
            </span>
        </span>
    );

    const testingContent = ({ race, round }: ScheduleCardProps) => ();

    return (
        <Link href={`/races/${link}`}>
            <Card
                className='relative h-[14rem] w-full max-w-[29rem] p-5 group'
                data-slot='schedule-card'>
                {/* @TODO: change  */}
                <span className='sr-only'>{`${title}, from ${race.dateStart} to ${race.dateEnd}`}</span>
            </Card>
        </Link>
    );
};
