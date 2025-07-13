import drivers from '@/mock/drivers';

import { DriverPodiumCards } from './_components/podium-cards';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import StandingsButton from './_components/button';

// @TODO: implement dynamic standings data fetching
// @TODO: create driver card position component
// @TODO: create team card position component

export default async function Standings() {
    // @TODO: create standings api-endpoint to fetch the data

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

                {/* @TODO: implement dynamic standings data fetching */}
                {/* @TODO: create dynamic table component */}
                {['drivers', 'teams'].map((option) => (
                    <TabsContent key={option} value={option}>
                        <div className='relative mb-4 flex gap-2 h-fit w-full'>
                            <DriverPodiumCards option={drivers[0]} position='first' />
                            <DriverPodiumCards option={drivers[1]} position='second' />
                            <DriverPodiumCards option={drivers[2]} position='third' />
                        </div>
                        <div>
                            {/* @TODO: create dynamic table component */}
                            <p>Standings data for {option} will be displayed here.</p>
                        </div>
                        <StandingsButton className='mt-4' destination={option} />
                    </TabsContent>
                ))}
            </Tabs>
        </section>
    );
}
