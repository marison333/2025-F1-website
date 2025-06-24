import teams from '@/mock/teams';
import { Team } from '@/types/index';

export async function GET(): Promise<Response> {
    const TeamData: Team[] = teams;
    return new Response(JSON.stringify(TeamData), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
