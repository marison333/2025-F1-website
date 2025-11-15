import Link from 'next/link';
import Image from 'next/image';
import { Team } from '@/types';
import { getTeamBackgroundColorDark } from '@/utils/team-colors';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import NavDropdownLayout from '@/components/layouts/nav-dropdown-layout';

interface TeamsListProps {
    teams: Team[];
}

type TeamCardProps = {
    team: Team;
};

const TeamCard = ({ team }: TeamCardProps) => {
    const logoBackgroundColor: string = getTeamBackgroundColorDark(team.id);
    const teamVarients: Record<string, string> = {
        alpine: 'group-hover:bg-alpine',
        'aston-martin': 'group-hover:bg-aston-martin',
        ferrari: 'group-hover:bg-ferrari',
        haas: 'group-hover:bg-haas',
        'kick-sauber': 'group-hover:bg-kick-sauber',
        mclaren: 'group-hover:bg-mclaren',
        mercedes: 'group-hover:bg-mercedes',
        'racing-bulls': 'group-hover:bg-racing-bulls',
        'red-bull': 'group-hover:bg-red-bull',
        williams: 'group-hover:bg-williams'
    };
    const teamColor = (teamId: string) => {
        return `var(--color-${teamId})`;
    };

    return (
        <>
            <Link
                className='group relative overflow-hidden'
                data-slot='team-navigation-card'
                href={`/teams/${team.id}`}>
                <Card className={`w-full h-36 border-stone-800 dark`}>
                    <span
                        className={`absolute z-10 top-0 left-0 inset-10 size-full ${teamVarients[team.id]} opacity-[0.03] group-hover:opacity-[0.12]`}
                    />
                    <span
                        className={`z-10 absolute block h-[66px] -top-[27px] -right-[165px] opacity-[0.1] group-hover:opacity-30`}>
                        <span
                            className='block aspect-[6.0981595092]'
                            style={{
                                backgroundColor: teamColor(team.id),
                                height: '100%',
                                maskImage: 'url(/images/navigation/bg-team.webp)',
                                maskPosition: 'center',
                                maskRepeat: 'no-repeat',
                                maskSize: 'contain',
                                opacity: 1,
                                WebkitMaskImage: 'url(/images/navigation/bg-team.webp)',
                                WebkitMaskPosition: 'center',
                                WebkitMaskRepeat: 'no-repeat',
                                WebkitMaskSize: 'contain'
                            }}
                        />
                    </span>
                    <span className='z-10 absolute block h-16 -bottom-[9px] -left-6 opacity-[0.1] group-hover:opacity-40'>
                        <span
                            className='block aspect-[6.0981595092]'
                            style={{
                                backgroundColor: teamColor(team.id),
                                height: '100%',
                                maskImage: 'url(/images/navigation/bg-team.webp)',
                                maskPosition: 'center',
                                maskRepeat: 'no-repeat',
                                maskSize: 'contain',
                                opacity: 1,
                                WebkitMaskImage: 'url(/images/navigation/bg-team.webp)',
                                WebkitMaskPosition: 'center',
                                WebkitMaskRepeat: 'no-repeat',
                                WebkitMaskSize: 'contain'
                            }}
                        />
                    </span>

                    <CardHeader className='z-20 flex items-center gap-1 w-full p-2'>
                        <span className={`p-0.5 rounded-full shadow ${logoBackgroundColor}`}>
                            <Image
                                alt={`${team.name} logo`}
                                className='object-contain'
                                height={20}
                                loading='lazy'
                                src={`${team.iconUrl}`}
                                width={20}
                            />
                        </span>
                        <span className='uppercase font-extrabold'>
                            {team.id.replace(/-/g, ' ')}
                        </span>
                    </CardHeader>
                    <CardContent className='z-20'>
                        <Image
                            alt={`${team.name}`}
                            className='object-contain size-full'
                            height={300}
                            loading='lazy'
                            quality={50}
                            src={`${team.carImageUrl}`}
                            width={450}
                        />
                    </CardContent>
                </Card>
            </Link>
        </>
    );
};

export default function TeamsList({ teams }: TeamsListProps) {
    return (
        <NavDropdownLayout data-slot='teams-list'>
            <div className='mb-5 grid grid-cols-4 gap-2.5'>
                {teams.map((team, index) => (
                    <TeamCard key={index} team={team} />
                ))}
            </div>
            <Separator className='dark' />
            <div className='my-4'>
                <Button asChild className='dark text-white' variant='ghost'>
                    <Link href='/teams' className='capitalize'>
                        all teams
                    </Link>
                </Button>
            </div>
        </NavDropdownLayout>
    );
}
