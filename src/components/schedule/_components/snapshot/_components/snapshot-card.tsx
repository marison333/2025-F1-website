import Image from 'next/image';
import Link from 'next/link';

import { GrandPrix } from '@/types';
import formatDateRange from '@/utils/date-formatter';

import { Card } from '@/components/ui/card';

interface SnapshotCardProps {
    race: GrandPrix;
    round: number;
    isMain?: boolean;
}

export const SnapshotCard = ({ race, round }: SnapshotCardProps) => {
    const title = race.id.replace(/-/g, ' ').replace(/\sgp$/i, '');

    return (
        <Link href={`/races/${title}`}>
            <Card className='relative z-0 h-[17rem] w-full text-white overflow-hidden group'>
                <Image
                    alt={`Background image of ${title} circuit`}
                    className='absolute object-cover block size-full group-hover:scale-105 group-hover:ease-in-out duration-300 group-hover:peer'
                    height={1000}
                    priority={true}
                    src={`${race.imageUrl}`}
                    width={1000}
                />
                <span className='absolute block size-full bg-black/45' />
                <span className='relative z-20 size-full p-4 md:p-6 flex flex-col justify-between'>
                    <span className='h-fit w-full flex flex-col gap-0.5 justify-start'>
                        <span className='uppercase '>{`round ${round}`}</span>
                        <span className='text-3xl capitalize font-black group-hover:underline'>
                            {title}
                        </span>
                        <span className='uppercase'>
                            {formatDateRange(race.dateStart, race.dateEnd)}
                        </span>
                    </span>
                    <span className='capitalize'>{race.location.circuit}</span>
                </span>
            </Card>
        </Link>
    );
};
