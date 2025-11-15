import { Driver } from '@/types';
import DriverProfileLayout from '@/components/layouts/driver-profile-layout';

import { DriverHeader } from './_components/driver-header';
import { DriverHero } from './_components/hero';
import { DriverStatistics } from './_components/statistics';
import { DriverBiography } from './_components/biography';
import { CareerStatistics, seasonStatistic } from '@/types/statistics';

interface DriverProfileProps {
    driver: Driver;
    stats: {
        career: CareerStatistics | null;
        season: seasonStatistic | null;
    }
}

export default function DriverProfile({ driver, stats }: DriverProfileProps) {
    return (
        <>
            <DriverHeader />
            <DriverProfileLayout>
                <DriverHero driver={driver} />
                <DriverStatistics stats={stats} />
                <DriverBiography driver={driver} />
            </DriverProfileLayout>
        </>
    );
}
