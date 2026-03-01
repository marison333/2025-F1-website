import { InViewAnimation } from '@/components/animation';
import type { Team } from '@/types/';

interface TeamProfileProps {
    team: Team;
}

export const TeamProfileSection = ({ team }: TeamProfileProps) => {
    return (
        <div className='max-w-360 py-8' id='profile'>
            <InViewAnimation>
                <h2>
                    <span className='text-5xl capitalize'>team profile</span>
                </h2>
            </InViewAnimation>
            <dl className='w-full pt-8 grid grid-cols-[1fr_1fr] lg:grid-cols-3 gap-4 lg:gap-6'>
                {Object.entries(team.details).map(([label, value]) => (
                    <InViewAnimation key={label}>
                        <div className='flex flex-col justify-start'>
                            <dt className='text-sm text-stone-400 uppercase'>{label}</dt>
                            <dd className='text-2xl font-bold capitalize'>{value}</dd>
                        </div>
                    </InViewAnimation>
                ))}
            </dl>
        </div>
    );
};
