import { CareerStatistics, seasonStatistic } from '@/types/statistics';

import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

interface DriverStatisticsProps {
    stats: {
        career: CareerStatistics | null;
        season: seasonStatistic | null;
    };
}

const seasonStatMap = [
    { label: 'season position', getValue: (s: seasonStatistic) => s.position },
    { label: 'season points', getValue: (s: seasonStatistic) => s.totalPoints }
];

const grandPrixStatMap = [
    { label: 'grand prix races', getValue: (s: seasonStatistic) => s.grandPrix.enteredRaces },
    {
        label: 'grand prix points',
        getValue: (s: seasonStatistic) => s.totalPoints - s.sprint.points
    },
    { label: 'grand prix wins', getValue: (s: seasonStatistic) => s.grandPrix.wins },
    { label: 'grand prix podiums', getValue: (s: seasonStatistic) => s.grandPrix.podiums },
    { label: 'grand prix poles', getValue: (s: seasonStatistic) => s.grandPrix.poles },
    { label: 'grand prix top 10s', getValue: (s: seasonStatistic) => s.grandPrix.top10s },
    { label: 'fastest laps', getValue: (s: seasonStatistic) => s.grandPrix.fastestLaps },
    { label: 'DNFs', getValue: (s: seasonStatistic) => s.grandPrix.dnf }
];

const sprintStatMap = [
    { label: 'sprint races', getValue: (s: seasonStatistic) => s.sprint.enteredRaces },
    { label: 'sprint points', getValue: (s: seasonStatistic) => s.sprint.points },
    { label: 'sprint wins', getValue: (s: seasonStatistic) => s.sprint.wins },
    { label: 'sprint podiums', getValue: (s: seasonStatistic) => s.sprint.podiums },
    { label: 'sprint poles', getValue: (s: seasonStatistic) => s.sprint.poles },
    { label: 'sprint top 10s', getValue: (s: seasonStatistic) => s.sprint.top10s }
];

const careerStatMap = [
    { label: 'grand prix entered', getValue: (c: CareerStatistics) => c.enteredGrandPrix },
    { label: 'career points', getValue: (c: CareerStatistics) => c.point },
    {
        label: 'highest race finish',
        getValue: (c: CareerStatistics) =>
            `${c.highestFinishPlace.position} (${c.highestFinishPlace.amoutOfTimes}x)`
    },
    { label: 'podiums', getValue: (c: CareerStatistics) => c.podiums },
    {
        label: 'highest grid position',
        getValue: (c: CareerStatistics) =>
            `${c.highestGridPosition.position} (${c.highestGridPosition.amoutOfTimes}x)`
    },
    { label: 'pole position', getValue: (c: CareerStatistics) => c.polePosition },
    { label: 'world championships', getValue: (c: CareerStatistics) => c.worldChampionships },
    { label: 'DNFs', getValue: (c: CareerStatistics) => c.dnf ?? 0 }
];

export const DriverStatistics = ({ stats }: DriverStatisticsProps) => {
    const { season, career } = stats;

    return (
        <div className='relative left-2/4 w-screen mx-[-50vw] md:mx-[-52vw] lg:mx-[-50vw] bg-stone-900'>
            <div
                className='max-w-[90rem] py-16 px-4 xl:px-0 mx-auto *:capitalize text-white'
                id='statistics'>
                <div className='mb-12 capitalize'>
                    <h2>
                        <span className='text-5xl'>Statistics</span>
                    </h2>
                </div>
                <div className='flex flex-col gap-16 md:grid grid-cols-2'>
                    <section>
                        <h3 className='w-full mb-4'>2025 season</h3>
                        <ul className='pt-4 grid grid-cols-2 gap-4 items-center justify-stretch md:justify-between dark'>
                            {seasonStatMap.map((stat, index) => (
                                <li className='px-1' key={index}>
                                    <span className='flex flex-col gap-2'>
                                        <span className='text-sm'>{stat.label}</span>
                                        <span className='font-black text-2xl'>
                                            {season ? stat.getValue(season) : '-'}
                                        </span>
                                    </span>
                                </li>
                            ))}
                            <Separator className='my-1 col-span-2' />
                            {grandPrixStatMap.map((stat, index) => (
                                <li className='px-1' key={index}>
                                    <span className='flex flex-col gap-2'>
                                        <span className='text-sm'>{stat.label}</span>
                                        <span className='font-black text-2xl'>
                                            {season ? stat.getValue(season) : '-'}
                                        </span>
                                    </span>
                                </li>
                            ))}
                            <Separator className='my-1 col-span-2' />
                            {sprintStatMap.map((stat, index) => (
                                <li className='px-1' key={index}>
                                    <span className='flex flex-col gap-2'>
                                        <span className='text-sm'>{stat.label}</span>
                                        <span className='font-black text-2xl'>
                                            {season ? stat.getValue(season) : '-'}
                                        </span>
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </section>
                    <section>
                        <Card className='size-full p-4 md:p-8 dark border-transparent bg-zinc-700'>
                            <h3>career stats</h3>
                            <ul>
                                {careerStatMap.map((stat, index) => (
                                    <li className='mb-2' key={index}>
                                        <span className='px-2 flex items-center justify-between'>
                                            <span className='text-sm'>{stat.label}</span>
                                            <span className='font-black text-3xl'>
                                                {career ? stat.getValue(career) : '-'}
                                            </span>
                                        </span>
                                        <Separator className='my-4' />
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    </section>
                </div>
            </div>
        </div>
    );
};
