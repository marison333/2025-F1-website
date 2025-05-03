import Link from 'next/link';
import Image from 'next/image';

import { Card, CardContent } from '@/components/ui/card';

export default function Hero() {
    return (
        <div className='hero w-full h-[30rem] flex gap-2 mb-5'>
            <Card className='max-w-3xl flex-1'>
                <CardContent>
                    <h1 className='text-6xl font-bold'>Welcome to Formule 1 Tracker</h1>
                    <p className='mt-2 text-lg text-muted-foreground'>
                        Track your favorite Formula 1 stats, drivers, teams and Seasons
                    </p>
                </CardContent>
            </Card>

            <div className='grid grid-cols-2 grid-rows-7 gap-2 max-w-3xl flex-1'>
                <Card className='col-span-2 flex items-center justify-center relative overflow-hidden'>
                    <CardContent>
                        <span className='text-2xl font-bold'>View any</span>
                    </CardContent>
                </Card>

                <Card aria-label='View Drivers' className='row-span-4 relative overflow-hidden'>
                    <Link
                        aria-label='View Drivers link'
                        className='block w-full h-full'
                        href='/drivers'>
                        <Image
                            alt='picture of formule 1 race driver Lewis Hamilton'
                            className='w-full h-full object-cover transition-transform duration-300 hover:scale-105'
                            fill
                            priority
                            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                            src='/images/home/hero/lh44-winner.jpg'
                        />
                    </Link>
                </Card>

                <Card className='row-span-2 relative overflow-hidden' aria-label='Track teams'>
                    <Link
                        aria-label='view teams link'
                        className='block w-full h-full'
                        href='/teams'>
                        <Image
                            alt='picture of formule 1 teams'
                            className='w-full h-full object-cover transition-transform duration-300 hover:scale-105'
                            fill
                            priority
                            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                            src='/images/home/hero/f1-teams.jpg'
                        />
                    </Link>
                </Card>

                {/* @TODO: find apropriate pics */}
                <Card className='row-span-2 relative overflow-hidden' aria-label='View standings'>
                    <Link
                        aria-label='standing link'
                        className='block w-full h-full'
                        href='/standings'>
                        <Image
                            alt='standings picture'
                            className='w-full h-full object-cover transition-transform duration-300 hover:scale-105'
                            fill
                            priority
                            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                            src='/images/home/hero/standings.jpeg'
                        />
                    </Link>
                </Card>

                {/* @TODO: find apropriate pics */}
                <Card className='row-span-2 relative overflow-hidden' aria-label='View standings'>
                    <Link
                        aria-label='standing link'
                        className='block w-full h-full'
                        href='/standings'>
                        <Image
                            alt='standings picture'
                            className='w-full h-full object-cover transition-transform duration-300 hover:scale-105'
                            fill
                            priority
                            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                            src='/images/home/hero/circuit.jpeg'
                        />
                    </Link>
                </Card>

                {/* @TODO: find apropriate pics */}
                <Card
                    className='row-span-2 relative overflow-hidden'
                    aria-label='Track other statistics'>
                    <Link
                        aria-label='standing link'
                        className='block w-full h-full'
                        href='/standings'>
                        <Image
                            alt='standings picture'
                            className='w-full h-full object-cover transition-transform duration-300 hover:scale-105'
                            fill
                            priority
                            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                            src='/images/home/hero/history.jpg'
                        />
                    </Link>
                </Card>
            </div>
        </div>
    );
}
