import { Team } from '@/types';
import teams from '@/mock/teams/teams';

export async function getTeams(): Promise<Team[]> {
    return teams;
}

export function getTeamByName(searchName: string): Promise<Team> {
    const sanitizedSearchName = searchName;

    const team = teams.find((team) => {
        const teamName = team.id.toLowerCase();

        return teamName === sanitizedSearchName.toLowerCase();
    });

    if (!team) {
        return Promise.reject(new Error(`Team not found: ${searchName}`));
    }

    return Promise.resolve(team);
}
