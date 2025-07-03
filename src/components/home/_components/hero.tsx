import Link from 'next/link';
import Image from 'next/image';

import { Card } from '@/components/ui/card';

export default function Hero() {
    return (
        <div
            className='relative w-[90rem] h-[80vh] grid grid-cols-2 gap-1 [&>*]:border-zinc-950'
            data-slot='hero'>
            <Card className='relative flex col-span-1 overflow-hidden'>
                <Link className='w-full' href='/current-grid'>
                    <Image
                        alt='Hero image of f1 driver lewis hamilton'
                        className='object-cover w-full h-full'
                        fill
                        priority
                        src='/images/home/hero/driver.png'
                    />
                    <div className='bg-gradient-to-b from-transparent to-black absolute z-20 bottom-0 left-0 right-0 p-4 w-full'>
                        <span className='text-white text-2xl font-semibold'>
                            view your favorite driver
                        </span>
                    </div>
                </Link>
            </Card>
            <Card className='relative flex col-span-1 overflow-hidden'>
                <Link className='w-full' href='#'>
                    {/* @TODO: Add link to standings */}
                    <Image
                        alt='Hero image of f1 driver lewis hamilton'
                        className='object-cover w-full h-full'
                        fill
                        priority
                        src='/images/home/hero/battle.png'
                    />
                    <div className='bg-gradient-to-b from-transparent to-black absolute z-20 bottom-0 left-0 right-0 p-4 w-full'>
                        <span className='text-white text-2xl font-semibold'>
                            view your favorite driver
                        </span>
                    </div>
                </Link>
            </Card>
        </div>
    );
}
