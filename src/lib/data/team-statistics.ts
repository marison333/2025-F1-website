import type { Team } from '@/types';
import type { CareerStatistics, seasonStatistic } from '@/types/statistics';

import careerStatistics from '@/mock/teams/career-standings';
import seasonStatistics from '@/mock/teams/season-standings';

export async function getTeamStatistics(team: Team): Promise<{
    career: CareerStatistics | null;
    season: seasonStatistic | null;
}> {
    const career =
        careerStatistics.find((stat: CareerStatistics) => stat.participant === team) || null;

    const season =
        seasonStatistics.find((stat: seasonStatistic) => stat.participant === team) || null;

    return { career, season };
}
