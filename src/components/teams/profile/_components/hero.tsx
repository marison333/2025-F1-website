import Image from 'next/image';

import { Team } from '@/types';
import { getTeamGradientClass, getTeamGradientDarkClass } from '@/utils/team-colors';

interface TeamHeroProps {
    team: Team;
}

export const TeamHero = ({ team }: TeamHeroProps) => {
    const shortTeamName: string = team.id.replace('-', ' ');
    const teamColorDark = (teamId: string) => {
        return `var(--color-${teamId}-dark)`;
    };

    return (
        <div
            className='relative left-1/2 w-screen h-[585px] md:h-[484px] lg:h-[599px] mx-[-50vw] flex flex-col overflow-clip text-white'
            data-slot='hero'>
            <div className='h-full flex flex-col justify-center gap-8'>
                <div
                    className={`absolute md:mx-[-50vw] lg:mx-[-52.855vw] xl:mx-[-50vw] inset-0 z-20 bg-linear-to-b ${getTeamGradientClass(team.id)} ${getTeamGradientDarkClass(team.id)}`}
                />

                <div className='flex flex-col gap-4 lg:gap-6'>
                    <div className='relative w-full flex justify-center px-px-24'>
                        <div className='absolute z-30 h-28 md:h-[183px] lg:h-64 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'>
                            <span
                                className='block aspect-[6.0981595092]'
                                style={{
                                    backgroundColor: teamColorDark(team.id),
                                    height: '100%',
                                    maskImage: 'url(/images/teams/background.webp)',
                                    maskPosition: 'center',
                                    maskRepeat: 'no-repeat',
                                    maskSize: 'contain',
                                    opacity: 0.3,
                                    WebkitMaskImage: 'url(/images/teams/background.webp)',
                                    WebkitMaskPosition: 'center',
                                    WebkitMaskRepeat: 'no-repeat',
                                    WebkitMaskSize: 'contain'
                                }}
                            />
                        </div>

                        <span className='relative z-40 max-w-full max-h-[90px] md:max-h-[127px] lg:max-h-[183px]'>
                            <Image
                                alt={`${shortTeamName} car`}
                                className='object-contain size-full'
                                height={700}
                                loading='eager'
                                priority={true}
                                src={`${team.carImageUrl}`}
                                width={700}
                            />
                        </span>
                    </div>

                    <div className='relative z-40 w-full flex justify-center gap-8'>
                        <h1 className='mb-0'>
                            <span className='font-black text-7xl text-center capitalize'>
                                {shortTeamName}
                            </span>
                        </h1>
                    </div>

                    <div className='relative z-40 flex flex-col items-center gap-2'>
                        <div className='absolute z-30 h-[66px] md:h-[103px] lg:h-[120px] top-1/2 -translate-y-1/2 left-0'>
                            <span
                                className='block aspect-[6.0981595092]'
                                style={{
                                    backgroundColor: teamColorDark(team.id),
                                    height: '100%',
                                    maskImage: 'url(/images/teams/background.webp)',
                                    maskPosition: 'center',
                                    maskRepeat: 'no-repeat',
                                    maskSize: 'contain',
                                    opacity: 0.4,
                                    WebkitMaskImage: 'url(/images/teams/background.webp)',
                                    WebkitMaskPosition: 'center',
                                    WebkitMaskRepeat: 'no-repeat',
                                    WebkitMaskSize: 'contain'
                                }}
                            />
                        </div>

                        <div className='relative z-40 grid grid-cols-[1fr_1px_1fr] gap-3 min-h-5'>
                            <span className='text-right'>{`${team.drivers.first.givenName} ${team.drivers.first.familyName}`}</span>
                            <span className='w-px  bg-white opacity-20' />
                            <span>{`${team.drivers.second.givenName} ${team.drivers.second.familyName}`}</span>
                        </div>

                        <Image
                            alt={shortTeamName}
                            className='relative z-40 h-8'
                            height={32}
                            src={`${team.iconUrl}`}
                            width={32}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
