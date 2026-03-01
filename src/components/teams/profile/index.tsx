import type { CareerStatistics, seasonStatistic } from '@/types/statistics';
import type { Team } from '@/types';

import { DriversSection } from './_components/drivers';
import { ProfileHeader } from '@/components/profile-ui/profile-header';
import { ProfileStatistics } from '@/components/profile-ui/statistics';
import { Separator } from '@/components/ui/separator';
import { TeamHero } from './_components/hero';
import { TeamProfileSection } from './_components/profile';

interface TeamProfileProps {
    team: Team;
    stats: {
        career: CareerStatistics | null;
        season: seasonStatistic | null;
    };
}

export default function TeamProfile({ team, stats }: TeamProfileProps) {
    return (
        <>
            <ProfileHeader />
            <div className='relative'>
                <TeamHero team={team} />
                <div className='relative z-30 left-2/4 w-screen mx-[-50vw] md:mx-[-52vw] lg:mx-[-50vw] py-8 bg-stone-900'>
                    <DriversSection team={team} />
                    <Separator className='dark mt-12 mb-6 max-w-360 mx-auto' />
                    <ProfileStatistics stats={stats} />
                </div>
                <TeamProfileSection team={team} />
            </div>
        </>
    );
}
