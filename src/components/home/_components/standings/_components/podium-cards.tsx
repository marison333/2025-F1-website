import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

import { Driver, Team } from '@/types';
import {
    darkTeamGradientColor,
    getTeamBackgroundColorDark,
    teamGradientColor
} from '@/utils/team-colors';

import { Card } from '@/components/ui/card';
import { FlagIcon } from '@/components/flag';

type StandingOption = { driver: Driver; points: number } | { team: Team; points: number };

interface PodiumCardProps {
    option: StandingOption;
    position: 'first' | 'second' | 'third';
}

const isDriverStanding = (option: StandingOption): option is { driver: Driver; points: number } => {
    return 'driver' in option;
};

const isTeamStanding = (option: StandingOption): option is { team: Team; points: number } => {
    return 'team' in option;
};

export function PodiumCards({ option, position }: PodiumCardProps) {
    const { points } = option;
    const teamColor = (teamId: string) => {
        return `var(--color-${teamId})`;
    };

    let teamId: string;
    if (isDriverStanding(option)) {
        teamId = option.driver?.team?.id || 'white';
    } else if (isTeamStanding(option)) {
        teamId = option.team?.id || 'white';
    } else {
        teamId = 'white';
    }

    const getPositionNumber = () => {
        return position === 'first' ? '1' : position === 'second' ? '2' : '3';
    };

    const getPositionSuffix = () => {
        return position === 'first' ? 'st' : position === 'second' ? 'nd' : 'rd';
    };

    const renderDriverContent = (driver: Driver) => (
        <>
            <Link
                className={clsx(
                    `block size-full p-2 ${getTeamBackgroundColorDark(driver.team.id)}`,
                    position === 'first' && 'h-[13rem] md:h-[20rem] md:order-2',
                    position === 'second' && 'h-[12.5rem] md:h-[18.5rem] md:order-1',
                    position === 'third' && 'h-[12.5rem] md:h-[17rem] md:order-3'
                )}
                href={`/drivers/${driver.givenName.toLowerCase()}-${driver.familyName.toLowerCase()}`}>
                <span className='absolute size-[21rem] -bottom-3 -left-25 opacity-70'>
                    <span
                        className='block aspect-[2.0284528749]'
                        style={{
                            backgroundColor: teamColor(driver.team.id),
                            height: '100%',
                            maskImage: 'url(/images/drivers/background.webp)',
                            maskPosition: 'center',
                            maskRepeat: 'repeat-x',
                            maskSize: 'contain',
                            opacity: 1
                        }}
                    />
                </span>
                <span className='h-full flex justify-between md:justify-stretch'>
                    <span className='z-10 h-full flex flex-col justify-between w-max p-2'>
                        <span className='flex flex-col gap-2'>
                            <span>
                                <span>
                                    <span className='font-extrabold'>
                                        <span className='text-3xl'>{getPositionNumber()}</span>
                                        <span className='uppercase'>{getPositionSuffix()}</span>
                                    </span>
                                </span>
                                <span className='mb-3 flex-col gap-1 justify-items-start'>
                                    <span className='flex gap-1 capitalize text-2xl hover:underline'>
                                        <span>{driver.givenName}</span>
                                        <span className='font-bold'>{driver.familyName}</span>
                                    </span>
                                    <span className='relative w-max text-sm capitalize'>
                                        {driver.team.id.replace('-', ' ')}
                                    </span>
                                </span>
                            </span>
                            <FlagIcon
                                iconUrl={driver.nationality.code}
                                name={driver.nationality.name}
                            />
                        </span>
                        <span>
                            <span className='font-extrabold'>
                                <span className='text-2xl'>{points}</span>
                                <span className='text-lg'>pts</span>
                            </span>
                        </span>
                    </span>
                    <span className='z-10'>
                        <Image
                            alt={`Picture of Formula One driver ${driver.givenName} ${driver.familyName}`}
                            className='object-center w-max'
                            height={250}
                            src={driver.mugshotUrl}
                            width={150}
                        />
                    </span>
                </span>
            </Link>
        </>
    );

    const renderTeamContent = (team: Team) => (
        <>
            <Link href={`/teams/${team.id}`}>
                <div className='h-full flex flex-col items-stretch justify-between overflow-hidden'>
                    <div className='flex-col justify-between p-2'>
                        <div>
                            <div>
                                <span className='font-extrabold'>
                                    <span className='text-2xl'>{getPositionNumber()}</span>
                                    <span className='uppercase'>{getPositionSuffix()}</span>
                                </span>
                            </div>
                            <div className='mb-3 flex-col gap-1 justify-items-start'>
                                <span className='flex gap-1 capitalize text-2xl font-bold hover:underline'>
                                    {team.id.replace(/-/g, ' ')}
                                </span>
                            </div>
                        </div>
                        <div>
                            <span className='font-extrabold'>
                                <span className='text-2xl'>{points}</span>
                                <span className='text-lg'>pts</span>
                            </span>
                        </div>
                    </div>
                    <div className='w-full'>
                        {team.carImageUrl && (
                            <Image
                                alt={`Picture of ${team.name}'s car`}
                                className='object-center w-max px-2'
                                height={600}
                                src={team.carImageUrl}
                                width={300}
                            />
                        )}
                    </div>
                </div>
            </Link>
        </>
    );

    return (
        <Card
            data-slot={`${position}-place-${isDriverStanding(option) ? 'driver' : 'team'}-card`}
            className={clsx(
                `relative z-10 size-full [&>*]:w-full text-white bg-gradient-to-l ${teamGradientColor(teamId)}  ${darkTeamGradientColor(teamId)} overflow-hidden`,
                position === 'first' && 'md:order-2',
                position === 'second' && 'md:order-1',
                position === 'third' && 'md:order-3'
            )}>
            {isDriverStanding(option)
                ? renderDriverContent(option.driver)
                : renderTeamContent(option.team)}
        </Card>
    );
}
