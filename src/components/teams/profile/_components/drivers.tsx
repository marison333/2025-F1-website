import type { Team, Driver } from '@/types';
import { getDriverByName } from '@/lib/data/drivers';

import { DriverCard } from '@/components/drivers/driverCard';

interface DriversSectionProps {
    team: Team;
}

interface DriversProps {
    driver: Driver;
}

export const DriversSection = async ({ team }: DriversSectionProps) => {
    const firstName = `${team.drivers.first.givenName} ${team.drivers.first.familyName}`;
    const secondName = `${team.drivers.second.givenName} ${team.drivers.second.familyName}`;
    
    const [firstDriver, secondDriver] = await Promise.all([
        getDriverByName(firstName).catch(() => null),
        getDriverByName(secondName).catch(() => null)
    ]);

    const drivers: DriversProps[] = [firstDriver, secondDriver];

    return (
        <div className='max-w-360 mx-4 lg:mx-auto' id='drivers'>
            <h2 className='text-white'>Drivers</h2>
            <div className='flex flex-col md:grid grid-cols-[1fr_1fr] gap-4'>
                {drivers.map((driver, index) => (
                    <DriverCard key={index} driver={driver} />
                ))}
            </div>
        </div>
    );
};
