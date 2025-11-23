import type { Team } from '@/types/';

interface TeamProfileProps {
    team: Team;
}

const profileLabels: string[] = [
    'full team name',
    'base',
    'team chief',
    'technical chief',
    'chassis',
    'power unit',
    'first team entry'
];

export const TeamProfileSection = ({ team }: TeamProfileProps) => {
    return (
        <div className='max-w-360 py-8' id='profile'>
            <h2>
                <span className='text-5xl capitalize'>team profile</span>
            </h2>
            <dl className='w-full pt-8 grid grid-cols-[1fr_1fr] lg:grid-cols-3 gap-4 lg:gap-6'>
                {profileLabels.map((label) => (
                    <div className='flex flex-col justify-start' key={label}>
                        <dt className='text-sm text-stone-400 uppercase'>{label}</dt>
                        <dd className='text-2xl font-bold capitalize'>Lorem ipsum dolor sit amet.</dd>
                    </div>
                ))}
            </dl>
        </div>
    );
};
