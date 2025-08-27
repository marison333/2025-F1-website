import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function ResultsLinks() {
    return (
        <>
            <div className='w-[90rem] mx-auto py-4 flex gap-2 text-white'>
                {['races', 'drivers', 'teams'].map((name, index) => (
                    <Button asChild className='dark' key={index} variant='ghost'>
                        <Link className='capitalize' href={`/results/${name}`}>
                            {name}
                        </Link>
                    </Button>
                ))}
            </div>
        </>
    );
}
