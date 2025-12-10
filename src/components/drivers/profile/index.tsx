import { Driver } from '@/types';
import DriverProfileLayout from '@/components/layouts/driver-profile-layout';

import { CareerStatistics, seasonStatistic } from '@/types/statistics';
import { DriverBiography } from './_components/biography';
import { DriverHero } from './_components/hero';
import { DriverStatistics } from './_components/statistics';
import { ProfileHeader } from '@/components/profile-header';

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
            <ProfileHeader />
            <DriverProfileLayout>
                <DriverHero driver={driver} />
                <DriverStatistics stats={stats} />
                <DriverBiography driver={driver} />
            </DriverProfileLayout>
        </>
    );
}
