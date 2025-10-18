import Link from 'next/link';

import formatDateRange from '@/utils/date-formatter';
import ScheduleCard from '@/types/schedule';

import { Card } from '@/components/ui/card';
import { FlagIcon } from '@/components/flag';
import { Badge } from '@/components/ui/badge';
import { ChevronRight } from 'lucide-react';

export const NextRaceScheduleCard = ({ race, round }: ScheduleCard) => {
    const title = race.id.replace(/-/g, ' ').replace(/\sgp$/i, '');
    const link = race.id.replace('-gp', '');

    return (
        <Link href={`/races/${link}`}>
            <Card
                className='relative h-[14rem] w-full p-2 md:p-2.5 dark bg-amber-600 group overflow-hidden'
                data-slot='schedule-next-race-card'>
                <span className='absolute z-10 top-0 bottom-0 left-3/4 -translate-x-2/4 opacity-[0.16] group-hover:opacity-30 duration-300'>
                    <span
                        className='block aspect-[6.0981595092]'
                        style={{
                            backgroundColor: 'black',
                            height: '100%',
                            maskImage: 'url(/images/drivers/background.webp)',
                            maskPosition: 'center',
                            maskRepeat: 'no-repeat',
                            maskSize: 'contain',
                            opacity: 1
                        }}
                    />
                </span>
                <span className='relative z-20 size-full [&>span]:w-full flex flex-col [&>span]:flex justify-between'>
                    <span className='flex-col justify-start gap-1.5'>
                        <span className='relative w-full flex items-center justify-between'>
                            <span className='uppercase text-sm'>{`round ${round}`}</span>
                            <Badge className='dark uppercase' variant='next'>
                                next race <ChevronRight />
                            </Badge>
                        </span>
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
                <span className='sr-only'>{`${title}, from ${race.dateStart} to ${race.dateEnd}`}</span>
            </Card>
        </Link>
    );
};
