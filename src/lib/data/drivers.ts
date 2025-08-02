import { Driver } from '@/types';
import drivers from '@/mock/drivers';

export async function getDrivers(): Promise<Driver[]> {
    return drivers;
}
