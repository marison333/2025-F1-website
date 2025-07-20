import { DriverStanding, TeamStanding } from '@/types/standings';

import driverStandings from '@/mock/driver-standings';
import teamStandings from '@/mock/team-standings';

import { PodiumCards } from './_components/podium-cards';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import StandingsButton from './_components/button';
import StandingsTable from './_components/table';

export default async function Standings() {
    // @TODO: create standings api-endpoint to fetch the data
    const driver: DriverStanding[] = driverStandings;
    const sortedDriverStandings = driver.sort((a, b) => b.points - a.points);

    const team: TeamStanding[] = teamStandings;
    const sortedTeamStandings = team.sort((a, b) => b.points - a.points);

    const getCurrentData = (option: string) => {
        return option === 'drivers' ? sortedDriverStandings : sortedTeamStandings;
    };

    return (
        <section className='w-full' data-slot='standings'>
            <h1 className='uppercase'>2025 season</h1>
            <Tabs defaultValue='drivers'>
                <TabsList className='[&>*]:text-xl'>
                    {['drivers', 'teams'].map((option) => (
                        <TabsTrigger key={option} value={option}>
                            {option.charAt(0).toUpperCase() + option.slice(1)}
                        </TabsTrigger>
                    ))}
                </TabsList>

                {['drivers', 'teams'].map((option, index) => {
                    const currentData = getCurrentData(option);

                    return (
                        <TabsContent key={index} value={option}>
                            <div className='relative mb-4 flex items-end gap-2 h-fit w-full'>
                                {currentData.slice(0, 3).map((standingData, index) => (
                                    <PodiumCards
                                        key={index}
                                        option={standingData}
                                        position={
                                            index === 0 ? 'first' : index === 1 ? 'second' : 'third'
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
        </section>
    );
}
