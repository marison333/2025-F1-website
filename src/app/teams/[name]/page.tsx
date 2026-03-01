import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

import { getTeamByName } from '@/lib/data/teams';
import { getTeamStatistics } from '@/lib/data/team-statistics';

import TeamProfile from '@/components/teams/profile';

interface TeamProfilePageProps {
    params: Promise<{
        name: string;
    }>;
}

export async function generateMetadata({ params }: TeamProfilePageProps): Promise<Metadata> {
    const { name } = await params;
    const searchName = decodeURIComponent(name);

    const team = await getTeamByName(searchName).catch(() => null);

    if (!team) {
        return {
            title: 'Team Not Found',
            description: 'The requested team profile could not be found.'
        };
    }

    return {
        title: `${team.id.replace('-', ' ')} - F1 Racing team`,
        description: `View profile and information for the ${team.id} Formula 1 team`
    };
}

export default async function TeamProfilePage({ params }: TeamProfilePageProps) {
    const { name } = await params;
    const searchName = decodeURIComponent(name);

    const team = await getTeamByName(searchName).catch((error) => {
        console.error(`Failed to fetch team: ${searchName}`, error);
        return null;
    });

    if (!team) notFound();

    const statistics = await getTeamStatistics(team);

    return <TeamProfile team={team} stats={statistics} />;
}
