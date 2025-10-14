import { getGrandPrixData } from '@/lib/data/grand-prix';
import { TestDate } from '@/lib/test-date';

import { CalendarButton } from './_components/calandar-button';
import { ScheduleCard } from './_components/schedule-cards';
import { ScheduleSnapshot } from './_components/snapshot';
import { Separator } from '../ui/separator';

export async function ScheduleOverview() {
    const race = await getGrandPrixData();
    const sortedRaces = race.sort((a, b) => a.dateStart.localeCompare(b.dateEnd));

    const now = TestDate; // for showing all cards, remove string if you want to test with current date.
    const upcomingRacesIndex = sortedRaces.findIndex((r) => new Date(r.dateStart) >= now);

    return (
        <div className='flex flex-col gap-5'>
            <div className='flex flex-wrap items-center justify-between gap-4'>
                <div>
                    <h1 className='uppercase'>2025 formula one world championship</h1>
                    <h2 className='text-3xl font-black uppercase'>race calendar</h2>
                </div>
                <CalendarButton />
            </div>
            <ScheduleSnapshot />
            <Separator />
            <ol className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4'>
                {sortedRaces.map((race, index) => {
                    let type: 'default' | 'next' | 'summary' | 'pre-season' = 'default';

                    if (index === 0) {
                        type = 'pre-season';
                    } else if (index === upcomingRacesIndex) {
                        type = 'next';
                    } else if (index < upcomingRacesIndex) {
                        type = 'summary';
                    }

                    return (
                        <li key={race.id}>
                            <ScheduleCard race={race} round={index} type={type} />
                        </li>
                    );
                })}
            </ol>
            <Separator />
        </div>
    );
}
