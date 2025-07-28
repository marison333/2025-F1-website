import grandPrix from '@/mock/grand-prix';
import { GrandPrix } from '@/types';

/**
 * API route to fetch all Grand Prixes of season calendar 2025.
 * 
 *
 * @returns {Promise<Response>} A JSON response containing the all Grand Prix data.
 */

export async function GET(): Promise<Response> {
    const grandPrixResults: GrandPrix[] = grandPrix;

    return Response.json(
        { status: 'success', data: grandPrixResults },
        { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
}
