import { getDrivers } from '@/lib/data/drivers';
import DriversPageLayout from '../layouts/drivers-page-layout';
import { Overview } from './_components/overview';

export default async function Drivers() {
    const driversData = await getDrivers();
    driversData.sort((a, b) => a.team.id.localeCompare(b.team.id));

    return (
        <DriversPageLayout>
            <div>
                <h1 className='uppercase'>drivers 2025</h1>
                <p>
                    Find the current drivers of the 2025 Formula 1 season
                </p>
            </div>
            <Overview drivers={driversData} />
        </DriversPageLayout>
    );
}
