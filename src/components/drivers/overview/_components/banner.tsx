import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { InView } from '@/components/ui/in-view';

export const TeamsBanner = () => {
    return (
        <InView
            variants={{
                hidden: { opacity: 0, y: 100, filter: 'blur(4px)' },
                visible: { opacity: 1, y: 0, filter: 'blur(0px)' }
            }}
            viewOptions={{ margin: '0px 0px -200px 0px' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}>
            <Card className='h-[20rem] p-5 my-10 bg-amber-600 text-white' data-slot='teams-banner'>
                <div className='w-full mt-auto'>
                    <h2 className='uppercase text-4xl font-extrabold'>f1 teams 2025</h2>
                    <p>
                        Check out this season&apos;s official F1 line-up by following your favourite
                        F1 teams on and off the track.
                    </p>
                    <Button asChild className='bg-white text-black' size='lg'>
                        <Link href='/teams'>View teams</Link>
                    </Button>
                </div>
            </Card>
        </InView>
    );
};
