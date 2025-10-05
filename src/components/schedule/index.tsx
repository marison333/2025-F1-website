import { getGrandPrixData } from '@/lib/data/grand-prix';

import { CalendarButton } from './_components/calandar-button';
import { ScheduleCard } from './_components/schedule-card';
import { ScheduleSnapshot } from './_components/snapshot';
import { Separator } from '../ui/separator';

export async function ScheduleOverview() {
    const race = await getGrandPrixData();
    const sortedRaces = race.sort((a, b) => a.dateStart.localeCompare(b.dateEnd));

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
            <ol className='flex flex-wrap md:grid grid-cols-3 gap-4'>
                {sortedRaces.map((race, index) => (
                    <li key={race.id}>
                        <ScheduleCard race={race} round={index + 1} />
                    </li>
                ))}
            </ol>
            <Separator />
        </div>
    );
}
