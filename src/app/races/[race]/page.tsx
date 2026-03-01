import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { getGrandPrixBySlug, getGrandPrixData } from '@/lib/data/grand-prix';
import { getRaceResultsForRace } from '@/lib/data/race-results';
import { TestDate } from '@/lib/test-date';
import RaceProfile from '@/components/races/profile';

interface RacePageProps {
    params: Promise<{
        race: string;
    }>;
}

export async function generateMetadata({ params }: RacePageProps): Promise<Metadata> {
    const { race } = await params;

    const grandPrix = await getGrandPrixBySlug(race).catch(() => null);

    if (!grandPrix) {
        return {
            title: 'Race Not Found',
            description: 'The requested race could not be found.'
        };
    }

    const eventName = grandPrix.id.replace(/-/g, ' ').replace(/\sgp$/i, '');

    return {
        title: `${eventName} Grand Prix`,
        description: `${grandPrix.name} at ${grandPrix.location.circuit}.`
    };
}

export default async function RacePage({ params }: RacePageProps) {
    const { race } = await params;

    const grandPrix = await getGrandPrixBySlug(race).catch(() => null);

    if (!grandPrix) {
        notFound();
    }

    const races = await getGrandPrixData();
    const sortedRaces = [...races].sort((a, b) => a.dateStart.localeCompare(b.dateStart));
    const raceIndex = sortedRaces.findIndex((item) => item.id === grandPrix.id);
    const hasRaceHappened = new Date(grandPrix.dateEnd) <= TestDate;
    const results = hasRaceHappened ? await getRaceResultsForRace(grandPrix) : [];

    const previousRace = raceIndex > 0 ? sortedRaces[raceIndex - 1] : null;
    const nextRace = raceIndex >= 0 ? sortedRaces[raceIndex + 1] || null : null;

    return (
        <RaceProfile
            hasRaceHappened={hasRaceHappened}
            nextRace={nextRace}
            previousRace={previousRace}
            race={grandPrix}
            results={results}
        />
    );
}
