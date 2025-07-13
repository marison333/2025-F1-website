import driverStandings from '@/mock/driver-standings';
import { Standing } from '@/types';

/**
 * API route to get the current driver standings.
 *
 * @returns {Promise<Response>} A JSON response containing the driver standings.
 */
export async function GET(): Promise<Response> {
    const driversResults: Standing[] = driverStandings;

    return Response.json(
        { status: 'success', data: driversResults },
        { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
}
