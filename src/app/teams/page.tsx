import { Metadata } from 'next';
import TeamsOverview from '@/components/teams/overview';

export const metadata: Metadata = {
    title: 'Teams',
    description: 'Find all Formula one teams of season 2025.'
};

export default function TeamsPage() {
    return <TeamsOverview />;
}
