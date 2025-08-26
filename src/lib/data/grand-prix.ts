import { GrandPrix } from '@/types';
import grandPrix from '@/mock/grand-prix';

export async function getGrandPrixData(): Promise<GrandPrix[]> {
    return grandPrix;
}
