import Link from 'next/link';

import formatDateRange from '@/utils/date-formatter';
import ScheduleCard from '@/types/schedule';

import { Card } from '@/components/ui/card';
import { FlagIcon } from '@/components/flag';

export const DefaultScheduleCard = ({ race, round }: ScheduleCard) => {
    const title: string = race.id.replace(/-/g, ' ').replace(/\sgp$/i, '');
    const link: string = race.id.replace('-gp', '');

    return (
        <Link href={`/races/${link}`}>
            <Card
                className='relative h-[14rem] w-full p-2.5 group overflow-hidden'
                data-slot='schedule-card'>
                <span className='relative size-full flex flex-col justify-between'>
                    <span className='w-full flex flex-col justify-start gap-1.5'>
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
                    <span className='flex justify-start'>
                        <span className='text-xl font-bold uppercase'>
                            {formatDateRange(race.dateStart, race.dateEnd)}
                        </span>
                    </span>
                </span>
            </Card>
        </Link>
    );
};
