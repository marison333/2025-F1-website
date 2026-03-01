import { DriverStanding, TeamStanding } from '@/types/standings';

import { PodiumCards } from './_components/podium-cards';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import StandingsButton from './_components/button';
import StandingsTable from './_components/table';
import { InView } from '@/components/ui/in-view';

interface StandingsProps {
    drivers: DriverStanding[];
    teams: TeamStanding[];
}

export default async function Standings({ drivers, teams }: StandingsProps) {
    const driver: DriverStanding[] = drivers;
    const sortedDriverStandings = driver.sort((a, b) => b.points - a.points);

    const team: TeamStanding[] = teams;
    const sortedTeamStandings = team.sort((a, b) => b.points - a.points);

    const getCurrentData = (option: string) => {
        return option === 'drivers' ? sortedDriverStandings : sortedTeamStandings;
    };

    return (
        <section className='w-screen md:w-full' data-slot='standings'>
            <InView
                variants={{
                    hidden: { opacity: 0, y: 100, filter: 'blur(4px)' },
                    visible: { opacity: 1, y: 0, filter: 'blur(0px)' }
                }}
                viewOptions={{ margin: '0px 0px -200px 0px' }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}>
                <h1 className='uppercase'>2025 season</h1>
            </InView>

            <InView
                variants={{
                    hidden: { opacity: 0, y: 100, filter: 'blur(4px)' },
                    visible: { opacity: 1, y: 0, filter: 'blur(0px)' }
                }}
                viewOptions={{ margin: '0px 0px -200px 0px' }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}>
                <Tabs defaultValue='drivers'>
                    <TabsList className='*:text-xl'>
                        {['drivers', 'teams'].map((option) => (
                            <TabsTrigger key={option} value={option}>
                                {option.charAt(0).toUpperCase() + option.slice(1)}
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    {['drivers', 'teams'].map((option, index) => {
                        const currentData = getCurrentData(option);

                        return (
                            <TabsContent className='mb-12' key={index} value={option}>
                                <div className='relative w-full mb-4 flex flex-wrap md:flex-nowrap md:items-end gap-2'>
                                    {currentData.slice(0, 3).map((standingData, index) => (
                                        <PodiumCards
                                            key={index}
                                            option={standingData}
                                            position={
                                                index === 0
                                                    ? 'first'
                                                    : index === 1
                                                      ? 'second'
                                                      : 'third'
                                            }
                                        />
                                    ))}
                                </div>
                                <StandingsTable data={currentData} />
                                <StandingsButton destination={option} />
                            </TabsContent>
                        );
                    })}
                </Tabs>
            </InView>
        </section>
    );
}
