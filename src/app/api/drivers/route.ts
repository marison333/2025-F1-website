import { NextResponse } from 'next/server';

export const revalidate = 1800;

export async function GET() {
    try {
        const response = await fetch(process.env.DRIVERS_API_URL_2025!, {
            next: { revalidate: 1800 } // 30 minutes
        });

        if (!response.ok) {
            return NextResponse.json({ error: 'Failed to fetch drivers data' }, { status: 502 });
        }

        const data = await response.json();

        return Response.json(data, {
            headers: {
                'Cache-Control': 'public s-maxage=1800, stale-while-revalidate=60'
            }
        });
    } catch (error) {
        return NextResponse.json({ error: 'Internal error' }, { status: 500 });
    }
}
