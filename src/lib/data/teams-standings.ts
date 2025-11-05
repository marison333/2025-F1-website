import { TeamStanding } from "@/types/standings";
import teamStandings from "@/mock/teams/team-standings";

export async function getTeamStandings(): Promise<TeamStanding[]> {
    return teamStandings;
}
