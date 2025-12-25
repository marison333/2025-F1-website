import Image from 'next/image';
import Link from 'next/link';

import { Team } from '@/types';
import { teamGradientColor, darkTeamGradientColor } from '@/utils/team-colors';

import { Card } from '@/components/ui/card';

interface TeamCardProps {
    team: Team;
}

export const TeamCard = ({ team }: TeamCardProps) => {
    const drivers = [team.drivers.first, team.drivers.second];
    const teamDisplayName = team.id.replace(/-/g, ' ');
    const teamColor = (teamId: string) => {
        return `var(--color-${teamId})`;
    };

    return (
        <Link data-slot='team-card' href={`/teams/${team.id}`} className='relative group'>
            <Card
                className={`relative h-[15rem] w-full p-4 gap-0 justify-between text-white overflow-hidden bg-gradient-to-l ${teamGradientColor(team.id)} ${darkTeamGradientColor(team.id)}`}>
                <span className='absolute h-[8rem] lg:h-[9rem] -bottom-[2px] -left[800px] lg:left-inherit lg:right-0 opacity-70'>
                    <span
                        className='block aspect-[6.0981595092]'
                        style={{
                            backgroundColor: teamColor(team.id),
                            height: '100%',
                            maskImage: 'url(/images/teams/background.webp)',
                            maskPosition: 'center',
                            maskRepeat: 'no-repeat',
                            maskSize: 'contain',
                            opacity: 1
                        }}
                    />
                </span>
                <span className='relative h-fit flex justify-between'>
                    <span>
                        <h3 className='capitalize group-hover:underline'>{teamDisplayName}</h3>
                        <span
                            className='w-full md:flex md:flex-row md:gap-2'
                            data-testid='team-drivers'>
                            {drivers.map((driver, index) => (
                                <span className='flex flex-wrap gap-0.5' key={index}>
                                    <span>{driver.givenName}</span>
                                    <span className='font-black'>{driver.familyName}</span>
                                </span>
                            ))}
                        </span>
                    </span>
                    <span className='size-11 p-1.5 flex items-center justify-center rounded-full bg-black/50'>
                        <Image
                            alt={`${team.id} icon`}
                            className='object-contain flex items-center'
                            height={50}
                            src={`${team.iconUrl}`}
                            width={50}
                        />
                    </span>
                </span>
                <span className='relative h-[8rem] w-[35rem] align-bottom flex justify-end'>
                    <Image
                        alt={`Picture of ${team.name}'s car`}
                        className='md:object-cover h-[7.5rem] w-full'
                        height={450}
                        src={`${team.carImageUrl}`}
                        width={450}
                    />
                </span>
            </Card>
        </Link>
    );
};
