import Image from 'next/image';
import Link from 'next/link';

import ScheduleCards from '@/types/schedule';
import formatDateRange from '@/utils/date-formatter';

import { Card } from '@/components/ui/card';
import { FlagIcon } from '@/components/flag';

export const PreSeasonScheduleCard = ({ race, round }: ScheduleCards) => {
    const title: string = race.id.replace(/-/g, ' ').replace(/\sgp$/i, '');
    const link: string = race.id.replace('-gp', '');

    return (
        <Link className='group' href={`/races/${link}`}>
            <Card
                className='relative h-[19rem] md:h-[14rem] w-full p-2 md:p-2.5 overflow-hidden'
                data-slot='schedule-pre-season-card'>
                <span className='relative z-0 size-full flex flex-col md:flex-row justify-between gap-1 md:gap-2.5'>
                    <span className='flex flex-col gap-1 grow'>
                        <span className='uppercase text-sm'>{round === 0 && `testing`}</span>

                        <span className='flex items-center justify-start gap-1'>
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

                        <span className='size-full text-sm font-medium capitalize'>
                            {race.name}
                        </span>

                        <span className='justify-start'>
                            <span className='text-xl font-bold uppercase'>
                                {formatDateRange(race.dateStart, race.dateEnd)}
                            </span>
                        </span>
                    </span>

                    <span className='h-[100px] w-full md:h-full md:w-[10rem] rounded-[0.3rem] overflow-hidden'>
                        <Image
                            src={`${race.imageUrl}`}
                            alt={`Image of ${race.name}`}
                            width={1000}
                            height={1000}
                            className='size-full md:h-full md:w-[10rem] object-cover group-hover:scale-105 transition-transform duration-300'
                        />
                    </span>
                </span>
            </Card>
        </Link>
    );
};
