import { DriverStanding } from "@/types/standings";
import driverStandings from "@/mock/driver-standings";

export async function getDriverStandings(): Promise<DriverStanding[]> {
    return driverStandings;
}
