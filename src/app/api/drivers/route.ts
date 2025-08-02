import { NextResponse } from 'next/server';
import { getDrivers } from '@/lib/data/drivers';

export async function GET() {
    const drivers = await getDrivers();

    return NextResponse.json(
        { status: 'success', data: drivers },
        { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
}
