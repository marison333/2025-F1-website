import Image from 'next/image';
import Link from 'next/link';

import { Card } from '@/components/ui/card';

export default function BentoGrid() {
    return (
        <section>
            <div className='max-w-3xl p-4 mb-5'>
                <h2 className='text-4xl font-bold mb-4'>
                    Explore every detail of your of Formule 1
                </h2>
                <p className='text-lg text-muted-foreground mb-6'>
                    Discover the latest drivers, teams, and standings in the world of Formule 1.
                </p>
            </div>

            <div className='h-[50rem] flex justify-between gap-2 mb-5'>
                <div className='max-w-3xl p-4 flex-1'>
                    <h3 className='text-8xl font-bold'>Welcome to Formule 1 Tracker</h3>
                    <p className='mt-2 text-lg text-muted-foreground'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae impedit
                        veritatis, blanditiis praesentium quo quas est velit earum aspernatur ipsa
                        quis maxime neque dicta consequuntur architecto quia facilis, iusto ea.
                    </p>
                </div>

                <div className='grid grid-cols-2 grid-rows-7 max-w-3xl flex-1 gap-1 [&>*]:relative [&>*]:overflow-hidden h-[50rem] p-1'>
                    <Card aria-label='View Drivers' className='row-span-4'>
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
                                src='/images/home/hero/driver.jpg'
                            />
                        </Link>
                    </Card>

                    <Card aria-label='Track teams' className='row-span-2'>
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
                                src='/images/home/hero/f1-teams.jpeg'
                            />
                        </Link>
                    </Card>

                    {/* @TODO: find apropriate pics */}
                    <Card aria-label='View standings' className='row-span-2'>
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
                    <Card aria-label='View standings' className='row-span-2'>
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

                    {/* @TODO: find apropriate copyright pics */}
                    <Card aria-label='Track other statistics' className='row-span-2'>
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
        </section>
    );
}
