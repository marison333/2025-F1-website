import Image from 'next/image';
import clsx from 'clsx';

import { Driver, Team } from '@/types';
import { teamGradientColor } from '@/utils/team-colors';

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
        <div className='flex justify-stretch overflow-hidden'>
            <div className='flex flex-col justify-between w-max p-2'>
                <div>
                    <div>
                        <span className='font-extrabold'>
                            <span className='text-2xl'>{getPositionNumber()}</span>
                            <span className='uppercase'>{getPositionSuffix()}</span>
                        </span>
                    </div>
                    <div className='mb-3 flex-col gap-1 justify-items-start'>
                        <span className='flex gap-1 capitalize text-2xl'>
                            <span>{driver.givenName}</span>
                            <span className='font-bold'>{driver.familyName}</span>
                        </span>
                        <span className='text-sm'>{driver.team.name}</span>
                    </div>
                    <FlagIcon iconUrl={driver.nationality.code} name={driver.nationality.name} />
                </div>
                <div>
                    <span className='font-extrabold'>
                        <span className='text-2xl'>{points}</span>
                        <span className='text-lg'>pts</span>
                    </span>
                </div>
            </div>
            <div className='w-max px-4'>
                <Image
                    alt={`Picture of Formula One ${driver.givenName} ${driver.familyName}`}
                    className='object-center w-max'
                    height={250}
                    src={driver.mugshotUrl}
                    width={150}
                />
            </div>
        </div>
    );

    // @TODO: Refit the team image inside the card
    const renderTeamContent = (team: Team) => (
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
                        <span className='flex gap-1 capitalize text-2xl font-bold'>
                            {team.name}
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
    );

    return (
        <Card
            data-slot={`${position}-place-${isDriverStanding(option) ? 'driver' : 'team'}-card`}
            className={clsx(
                `relative md:w-[30rem] [&>*]:w-full text-white bg-gradient-to-br ${teamGradientColor(teamId)} from-30% to-stone-800 to-80%`,
                position === 'first' && 'h-[20rem] md:order-2',
                position === 'second' && 'h-[18.5rem] md:order-1',
                position === 'third' && 'h-[17rem] md:order-3'
            )}>
            {isDriverStanding(option)
                ? renderDriverContent(option.driver)
                : renderTeamContent(option.team)}
        </Card>
    );
}
