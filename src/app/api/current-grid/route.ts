import { Driver } from '@/types';
import drivers from '@/mock/drivers';

export async function GET(): Promise<Response> {
    const DriverData: Driver[] = drivers;
    
    return new Response(JSON.stringify(DriverData), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
