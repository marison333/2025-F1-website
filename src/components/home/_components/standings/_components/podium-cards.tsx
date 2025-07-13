import Image from 'next/image';
import clsx from 'clsx';

import { Card } from '@/components/ui/card';
import { FlagIcon } from '@/components/flag';

interface Driver {
    imageUrl: string;
    nationality: {
        code: string;
        name: string;
    };
    givenName: string;
    familyName: string;
    points: number;
    team: string;
}

interface DriverPodiumCardProps {
    option: Driver;
    position: 'first' | 'second' | 'third';
}

export function DriverPodiumCards({ option, position }: DriverPodiumCardProps) {
    return (
        <Card
            data-slot={`${position}-place-driver-card`}
            className={clsx(
                'relative flex-row justify-stretch md:w-[30rem] [&>*]:w-full overflow-hidden',
                position === 'first' && 'h-[20rem]',
                position === 'second' && 'h-[18rem]',
                position === 'third' && 'h-[16rem]'
            )}>
            <div className='flex flex-col justify-between p-2'>
                <div>
                    <div>
                        <span className='font-extrabold'>
                            <span className='text-2xl'>
                                {position === 'first' ? '1' : position === 'second' ? '2' : '3'}
                            </span>
                            <span className='uppercase'>
                                {position === 'first' ? 'st' : position === 'second' ? 'nd' : 'rd'}
                            </span>
                        </span>
                    </div>
                    <div className='mb-3 flex-col gap-1 justify-items-start'>
                        <span className='flex gap-1 capitalize text-2xl'>
                            <span>{option.givenName}</span>
                            <span className='font-bold'>{option.familyName}</span>
                        </span>
                        <span className='text-sm'>{option.team}</span>
                    </div>
                    <FlagIcon iconUrl={option.nationality.code} name={option.nationality.name} />
                </div>
                <div className=''>
                    <span className='font-extrabold'>
                        <span className='text-2xl'>{option.points}</span>
                        <span className='text-lg'>pts</span>
                    </span>
                </div>
            </div>
            <div className='w-full'>
                <Image
                    alt={`Picture of the ${option.givenName} ${option.familyName}`}
                    className='object-center w-max'
                    height={400}
                    src={option.imageUrl}
                    width={200}
                />
            </div>
        </Card>
    );
}
