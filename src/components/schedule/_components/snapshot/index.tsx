import grandPrix from '@/mock/grand-prix';

import { SnapshotCard } from './_components/snapshot-card';
import { TestDate } from '@/lib/test-date';

export const ScheduleSnapshot = () => {
    const currentDate = TestDate; //for showing all cards, remove string if you want to test with current date.

    const sortedGrandPrix = [...grandPrix].sort(
        (a, b) => new Date(a.dateStart).getTime() - new Date(b.dateStart).getTime()
    );

    const currentRaceIndex = sortedGrandPrix.findIndex(
        (race) => new Date(race.dateStart) > currentDate
    );

    const previousRace = currentRaceIndex > 0 ? sortedGrandPrix[currentRaceIndex - 1] : null;
    const nextRace = currentRaceIndex >= 0 ? sortedGrandPrix[currentRaceIndex] : null;

    const upcomingRaces =
        currentRaceIndex >= 0
            ? sortedGrandPrix.slice(currentRaceIndex + 1, currentRaceIndex + 3)
            : [];

    const displayRaces = [
        previousRace && {
            ...previousRace,
            section: 'previous' as const
        },
        nextRace && { ...nextRace, section: 'next' as const },
        ...upcomingRaces.map((race) => ({
            ...race,
            section: 'upcoming' as const
        }))
    ].filter((race): race is NonNullable<typeof race> => race !== null);

    if (displayRaces.length === 0) {
        return (
            <div className='text-center py-12'>
                <h3 className='text-2xl font-bold text-gray-800'>No upcoming races</h3>
            </div>
        );
    }

    const mobileSection =
        displayRaces.length > 1 ? displayRaces[1].section : displayRaces[0]?.section;

    return (
        <div className='w-full pt-8' data-slot='schedule-snapshot'>
            <div className='hidden md:grid md:grid-cols-3 xl:grid-cols-4 gap-4 mb-4 [&>span]:text-2xl [&>span]:font-bold [&>span]:text-gray-900'>
                {['Previous', 'Next', 'Upcoming'].map((label) => (
                    <span key={label}>{label}</span>
                ))}
            </div>

            <div className='md:hidden mb-4'>
                <span className='text-2xl font-bold text-gray-900'>
                    {mobileSection === 'next' && 'Next'}
                </span>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                {displayRaces.map((race, index) => {
                    let visibilityClass = '';

                    if (index === 0) {
                        visibilityClass = 'hidden md:block';
                    } else if (index === 1) {
                        visibilityClass = '';
                    } else if (index === 2) {
                        visibilityClass = 'hidden lg:block';
                    } else if (index === 3) {
                        visibilityClass = 'hidden xl:block';
                    }

                    return (
                        <div key={race.id} className={visibilityClass}>
                            <SnapshotCard race={race} round={index + 1} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
