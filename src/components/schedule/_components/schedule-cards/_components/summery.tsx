import Link from 'next/link';

import clsx from 'clsx';
import formatDateRange from '@/utils/date-formatter';
import ScheduleCard from '@/types/schedule';

import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { FlagIcon } from '@/components/flag';

interface ScheduleCardProps extends ScheduleCard {
    positions?: {
        [key: string]: {
            givenName: string;
            familyName: string;
        };
    };
}

export const SummaryScheduleCard = ({ race, positions, round }: ScheduleCardProps) => {
    const title: string = race.id.replace(/-/g, ' ').replace(/\sgp$/i, '');
    const link: string = race.id.replace('-gp', '');

    return (
        <Link href={`/races/${link}`}>
            <Card
                className='relative h-[14rem] w-full p-2 md:p-2.5 group overflow-hidden'
                data-slot='schedule-card'>
                <span className='relative size-full [&>span]:w-full flex flex-col [&>span]:flex justify-between gap-0'>
                    <span className='flex-col justify-start gap-1.5'>
                        <span className='relative w-full flex flex-row items-center justify-between'>
                            <span className='uppercase text-sm'>{`round ${round}`}</span>
                            <Badge className='uppercase text-sm' variant='outline'>
                                🏁 {formatDateRange(race.dateStart, race.dateEnd)}
                            </Badge>
                        </span>
                        <span className='flex items-center gap-1'>
                            <span>
                                <FlagIcon
                                    name={race.location.nationality.name}
                                    iconUrl={race.location.nationality.code}
                                />
                            </span>
                            <span className='capitalize text-2xl font-bold group-hover:underline'>
                                {title}
                            </span>
                        </span>
                        <span className='text-sm capitalize'>{race.name}</span>
                    </span>

                    <span
                        className='w-full mt-2 flex flex-wrap md:flex-nowrap md:flex-row justify-end md:justify-none gap-0.5 md:gap-1 [&>span]:rounded-[0.175rem] text-white text-sm [&>span]:bg-black'
                        data-testid='race-positions'>
                        {positions &&
                            Object.entries(positions).map(([key, driver], index) => (
                                <span
                                    className={clsx(
                                        'md:w-full p-1 flex items-center justify-start gap-0.5',
                                        index === 0 && 'w-full',
                                        index === 1 && 'w-[90%]',
                                        index === 2 && 'w-[80%]'
                                    )}
                                    key={key}>
                                    <span className='w-fit py-0.5 px-1 flex flex-col justify-center items-center leading-none'>
                                        <span className='text-[0.8rem]'>{index + 1}</span>
                                        <span className='uppercase text-[0.6rem]'>
                                            {index === 0 ? 'st' : index === 1 ? 'nd' : 'rd'}
                                        </span>
                                    </span>
                                    <span className='flex flex-row gap-0.5 capitalize text-sm'>
                                        <span>{driver.givenName}</span>
                                        <span className='font-black'>{driver.familyName}</span>
                                    </span>
                                </span>
                            ))}
                    </span>
                </span>
            </Card>
        </Link>
    );
};
