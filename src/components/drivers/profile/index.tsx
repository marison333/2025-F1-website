import type { CareerStatistics, seasonStatistic } from '@/types/statistics';
import type { Driver } from '@/types';

import DriverProfileLayout from '@/components/layouts/driver-profile-layout';

import { DriverBiography } from './_components/biography';
import { DriverHero } from './_components/hero';
import { ProfileStatistics } from '../../profile-ui/statistics';
import { ProfileHeader } from '@/components/profile-ui/profile-header';

interface DriverProfileProps {
    driver: Driver;
    stats: {
        career: CareerStatistics | null;
        season: seasonStatistic | null;
    };
}

export default function DriverProfile({ driver, stats }: DriverProfileProps) {
    return (
        <>
            <ProfileHeader />
            <DriverProfileLayout>
                <DriverHero driver={driver} />
                <ProfileStatistics stats={stats} />
                <DriverBiography driver={driver} />
            </DriverProfileLayout>
        </>
    );
}
