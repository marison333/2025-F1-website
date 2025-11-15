import { Driver } from '@/types';
import { CareerStatistics, seasonStatistic } from '@/types/statistics';

import careerStatistics from '@/mock/drivers/career-statistics';
import seasonStatistics from '@/mock/drivers/season-statistics';

export async function getDriverStatistics(driver: Driver): Promise<{
    career: CareerStatistics | null;
    season: seasonStatistic | null;
}> {
    const career =
        careerStatistics.find((stat: CareerStatistics) => stat.participant === driver) || null;

    const season =
        seasonStatistics.find((stat: seasonStatistic) => stat.participant === driver) || null;

    return { career, season };
}
