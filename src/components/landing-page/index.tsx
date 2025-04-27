import React from 'react';
import Link from 'next/link';

import { Card, CardContent } from '@/components/ui/card';
import Standings from './_components/standings';

export default function LandingPage() {
    return (
        <>
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
                    <Card className='col-span-2 py-0'>
                        <CardContent>
                            <h3 className='font-bold text-4xl text-center'>Track any</h3>
                        </CardContent>
                    </Card>
                    <Card className='row-span-4'>
                        <Link className='block w-full h-full' href='/drivers'>
                            <span>Driver</span>
                        </Link>
                    </Card>
                    <Card className='row-span-2'>
                        <Link className='block w-full h-full' href='/teams'>
                            <span>Team</span>
                        </Link>
                    </Card>
                    <Card className='row-span-2'>
                        <Link className='block w-full h-full' href='/seasons'>
                            <span>Season</span>
                        </Link>
                    </Card>
                    <Card className='row-span-2'>
                        <Link className='block w-full h-full' href='/circuits'>
                            <span>Circuit</span>
                        </Link>
                    </Card>
                    <Card className='row-span-2'>
                        <Link className='block w-full h-full' href='/stats'>
                            <span>Other Statistics</span>
                        </Link>
                    </Card>
                </div>
            </div>
            <div className='flex items-center'>
                <section className='px-4 mb-10'>
                    <h1 className='font-bold text-4xl mb-2'>
                        Finding all statistics right here, past or present.
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis molestias
                        doloremque voluptatum nemo recusandae at quibusdam quae vitae vero ducimus,
                        eius quia itaque facilis odio non dolorum atque sapiente nulla?
                    </p>
                </section>
            </div>
            <div className='container mx-auto'>
                <section className='px-4 mb-10'>
                    <Standings />
                </section>
            </div>
        </>
    );
}
