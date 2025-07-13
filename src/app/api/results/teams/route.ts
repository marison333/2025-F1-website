import teamStandings from '@/mock/team-standings';
import { Standing } from '@/types';

/**
 * API route to get the current team standings.
 *
 * @returns {Promise<Response>} A JSON response containing the team  standings.
 */
export async function GET(): Promise<Response> {
    const teamsResults: Standing[] = teamStandings;

    return Response.json(
        { status: 'success', data: teamsResults },
        { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
}
