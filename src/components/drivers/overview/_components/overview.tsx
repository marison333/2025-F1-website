import Link from 'next/link';
import Image from 'next/image';

import { Driver } from '@/types';
import { getTeamBackgroundColorDark } from '@/utils/team-colors';

import { Card } from '@/components/ui/card';
import { FlagIcon } from '@/components/flag';

interface OverviewProps {
    drivers: Driver[];
}

interface DriverCardProps {
    driver: Driver;
}

export function Overview({ drivers }: OverviewProps) {
    const DriverCard = ({ driver }: DriverCardProps) => {
        const teamColor = (teamId: string) => {
            return `var(--color-${teamId})`;
        };
        const driverLink = `/drivers/${driver.givenName.toLowerCase()}-${driver.familyName.toLowerCase()}`;

        return (
            <Link data-slot='driver-card' href={driverLink}>
                <Card
                    className={`relative z-0 group h-[14rem] w-full min-w-[300px] text-white ${getTeamBackgroundColorDark(driver.team.id)} overflow-hidden`}>
                    <div className='w-[1122px] h-[306px] absolute top-2/4 -translate-y-2/4 left-[31px] md:left-2/4 md:-translate-x-2/4 md:opacity-95'>
                        <div className='absolute h-[306px] left-0 md:left-[43%] md:right-0 top-2/4 -translate-y-2/4'>
                            <span
                                className='block aspect-[2.0284528749]'
                                style={{
                                    backgroundColor: teamColor(driver.team.id),
                                    height: '100%',
                                    maskImage: 'url(/images/drivers/background.webp)',
                                    maskPosition: 'center',
                                    maskRepeat: 'no-repeat',
                                    maskSize: 'contain',
                                    opacity: 1,
                                    WebkitMaskImage: 'url(/images/drivers/background.webp)',
                                    WebkitMaskPosition: 'center',
                                    WebkitMaskRepeat: 'no-repeat',
                                    WebkitMaskSize: 'contain'
                                }}
                            />
                        </div>
                        <div className='hidden md:block absolute h-[306px] left-0 top-2/4 -translate-y-2/4 opacity-30'>
                            <span
                                className='block aspect-[2.0284528749]'
                                style={{
                                    backgroundColor: teamColor(driver.team.id),
                                    height: '100%',
                                    maskImage: 'url(/images/drivers/background.webp)',
                                    maskPosition: 'center',
                                    maskRepeat: 'no-repeat',
                                    maskSize: 'contain',
                                    opacity: 1,
                                    WebkitMaskImage: 'url(/images/drivers/background.webp)',
                                    WebkitMaskPosition: 'center',
                                    WebkitMaskRepeat: 'no-repeat',
                                    WebkitMaskSize: 'contain'
                                }}
                            />
                        </div>
                    </div>

                    <div className='z-10 w-full p-1.5 flex justify-between overflow-hidden'>
                        <div className='flex flex-col justify-between w-max p-2'>
                            <div className='h-full flex flex-col justify-between'>
                                <div className='flex flex-col'>
                                    <span
                                        className='flex flex-col gap-1 capitalize leading-5 text-2xl  group-hover:underline'
                                        data-testid='driver-name'>
                                        <span>{driver.givenName}</span>
                                        <span className='font-bold'>{driver.familyName}</span>
                                    </span>
                                    <span className='relative w-max my-1 capitalize font-bold'>
                                        {driver.team.id.replace('-', ' ')}
                                    </span>
                                    <span className='text-3xl font-extrabold'>
                                        #{driver.permanentNumber}
                                    </span>
                                </div>
                                <FlagIcon
                                    iconUrl={driver.nationality.code}
                                    name={driver.nationality.name}
                                />
                            </div>
                        </div>
                        <div>
                            <Image
                                alt={`Picture of Formula One ${driver.givenName} ${driver.familyName}`}
                                className='object-center w-max'
                                height={250}
                                src={driver.mugshotUrl}
                                width={150}
                            />
                        </div>
                        <div />
                    </div>
                </Card>
            </Link>
        );
    };

    return (
        <ul
            className='w-full flex flex-col gap-4 list-none [@media(min-width:679px)]:grid [@media(min-width:679px)]:grid-cols-2'
            data-slot='driver-list'>
            {drivers.map((driver) => (
                <li key={driver.code}>
                    <DriverCard driver={driver} />
                </li>
            ))}
        </ul>
    );
}
