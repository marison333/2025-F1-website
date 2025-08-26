import { Team } from '@/types';
import teams from '@/mock/teams';

export async function getTeams(): Promise<Team[]> {
    return teams;
}
