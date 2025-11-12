import { DriverStanding } from '@/types/standings';
import driverStandings from '@/mock/drivers/standings';

export async function getDriverStandings(): Promise<DriverStanding[]> {
    return driverStandings;
}
