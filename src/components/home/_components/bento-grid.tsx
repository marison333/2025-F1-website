import Image from 'next/image';
import Link from 'next/link';

import { Card } from '@/components/ui/card';

export default function BentoGrid() {
    return (
        <div className='py-10'>
            <h2 className='uppercase'>Find what you like</h2>
            <div
                className='relative w-full grid grid-cols-2 grid-rows-2 gap-4 max-h-[40rem] [&>*]:h-[20rem]'
                data-slot='bento-grid'>
                <Card className='flex col-span-1 overflow-hidden relative'>
                    <span className='flex-1'>
                        <Image
                            src='/images/home/bento-grid/battle.png'
                            alt='Image of 2 Formula 1 Cars Battling'
                            width={500}
                            height={500}
                            className='object-cover w-full h-full'
                        />
                    </span>
                    <div className='bg-gradient-to-b from-transparent to-black absolute z-20 bottom-0 left-0 right-0 p-4 w-full'>
                        <span className='text-white text-2xl font-semibold'>
                            Look at all statistics right here
                        </span>
                    </div>
                </Card>
                <div className='grid grid-cols-2 gap-4 [&>*]:overflow-hidden'>
                    <Card className='group'>
                        <Link href='#'>
                            <div>
                                <div>
                                    <Image
                                        src='/images/home/bento-grid/standings.png'
                                        alt='Bento Grid Image 2'
                                        width={500}
                                        height={500}
                                        className='object-cover w-full h-full'
                                    />
                                </div>
                                <div className='p-2'>
                                    <h3 className='text-lg font-semibold group-hover:underline'>
                                        Standings
                                    </h3>
                                    <p className='text-sm text-gray-500'>
                                        Check the latest standings
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </Card>
                    <Card className='group'>
                        <Link href='#'>
                            <div>
                                <div>
                                    <Image
                                        src='/images/home/bento-grid/history.jpg'
                                        alt='Bento Grid Image 2'
                                        width={500}
                                        height={500}
                                        className='object-cover w-full h-full'
                                    />
                                </div>
                                <div className='p-2'>
                                    <h3 className='text-lg font-semibold group-hover:underline'>
                                        Explore More
                                    </h3>
                                    <p className='text-sm text-gray-500'>
                                        Discover a variety of content
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </Card>
                </div>
                <div className='grid grid-cols-2 gap-4 [&>*]:group [&>*]:overflow-hidden'>
                    <Card className='group'>
                        {/* @TODO: Add link to driver stats */}
                        <Link href='#'>
                            <div>
                                <Image
                                    src='/images/home/bento-grid/driver.png'
                                    alt='Bento Grid Image 2'
                                    width={500}
                                    height={500}
                                    className='object-cover w-full h-full'
                                />
                            </div>
                            <div className='p-2'>
                                <h3 className='text-lg font-semibold group-hover:underline'>
                                    Find your driver
                                </h3>
                                <p className='text-sm text-gray-500'>
                                    Search for your favorite driver and see their stats
                                </p>
                            </div>
                        </Link>
                    </Card>
                    <Card className='group'>
                        {/* @TODO: Add link to team stats */}
                        <Link href='#'>
                            <div>
                                <Image
                                    src='/images/home/bento-grid/team.jpeg'
                                    alt='Bento Grid Image 2'
                                    width={500}
                                    height={500}
                                    className='object-cover w-full h-full'
                                />
                            </div>
                            <div className='p-2'>
                                <h3 className='text-lg font-semibold group-hover:underline'>
                                    Find your team
                                </h3>
                                <p className='text-sm text-gray-500'>
                                    Search for your favorite team and see their stats
                                </p>
                            </div>
                        </Link>
                    </Card>
                </div>
                <Card className='flex col-span-1 overflow-hidden relative'>
                    <span className='flex-1'>
                        <Image
                            src='/images/home/bento-grid/circuit.jpeg'
                            alt='Image of a Formula 1 Circuit'
                            width={500}
                            height={500}
                            className='object-cover w-full h-full'
                        />
                    </span>
                    <div className='bg-gradient-to-b from-transparent to-black absolute z-20 bottom-0 left-0 right-0 p-4 w-full'>
                        <span className='text-white text-2xl font-semibold'>
                            Explore the circuits
                        </span>
                    </div>
                </Card>
            </div>
        </div>
    );
}
