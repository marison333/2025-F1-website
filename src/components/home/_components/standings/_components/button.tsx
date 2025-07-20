import Link from 'next/link';

import { Button } from '@/components/ui/button';

interface StandingsButtonProps {
    destination: string;
}

export default function StandingsButton(data: StandingsButtonProps) {
    return (
        <div className='mt-4 flex justify-center'>
            <Button asChild variant='link' className='text-xl w-fit' data-slot='standings-button'>
                <Link href={`/results/${data.destination}`}>View Standings</Link>
            </Button>
        </div>
    );
}
