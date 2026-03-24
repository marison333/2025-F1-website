import { GrandPrix } from '@/types';
import grandPrix from '@/mock/grand-prix';
import { slugToRaceCandidates } from '@/lib/race-slug';

export async function getGrandPrixData(): Promise<GrandPrix[]> {
    return grandPrix;
}

export async function getGrandPrixBySlug(slug: string): Promise<GrandPrix> {
    const candidates = slugToRaceCandidates(slug);

    const race = grandPrix.find((grandPrixRace) =>
        candidates.includes(grandPrixRace.id.toLowerCase())
    );

    if (!race) {
        return Promise.reject(new Error(`Race not found: ${slug}`));
    }

    return Promise.resolve(race);
}
