import { redirect } from 'next/navigation';

import { raceIdToSlug } from '@/lib/race-slug';

interface ScheduleRaceRedirectPageProps {
    params: Promise<{
        race: string;
    }>;
}

export default async function ScheduleRaceRedirectPage({ params }: ScheduleRaceRedirectPageProps) {
    const { race } = await params;
    const slug = raceIdToSlug(decodeURIComponent(race));

    redirect(`/races/${slug}`);
}
