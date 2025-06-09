'use client';

import Image from 'next/image';

import '../styles/driver-results.css';
import CountUp from './count-up';

interface DriverResultsProps {
    key: string;
    title: string;
    from: number;
    to: number;
}

const counter: DriverResultsProps[] = [
    { key: 'wins', title: 'Wins', from: 0, to: 54 },
    { key: 'podiums', title: 'Podiums', from: 0, to: 98 },
    { key: 'poles', title: 'Poles', from: 0, to: 39 },
    { key: 'points', title: 'Lifetime Points', from: 0, to: 3160 },
    { key: 'world-championships', title: 'World Championships', from: 0, to: 4 }
];

export default function DriverResults() {
    return (
        <section className='driver-results-background'>
            <div className='h-[45rem] md:max-w-[90rem] px-2 mb-10'>
                <h2 className='font-bold uppercase text-7xl mb-2'>
                    Look at your favourite drivers lifetime achievements
                </h2>
                <div className='flex flex-row justify-between'>
                    <div className='count-up-container'>
                        {counter.map((item: DriverResultsProps) => (
                            <div key={item.key} className='count-up'>
                                <span>{item.title}</span>
                                <CountUp
                                    from={item.from}
                                    to={item.to}
                                    direction='up'
                                    duration={2}
                                    className='count-up'
                                />
                            </div>
                        ))}
                    </div>

                    <div className='flex flex-col items-center justify-center'>
                        <div className='overflow-hidden w-[40rem] h-[37rem]'>
                            {/* @TODO: find image of max verstappen */}
                            <Image
                                alt='Max verstappen'
                                className='object-contain'
                                height={700}
                                src='/images/home/driver-results/m-verstappen-w.png'
                                width={700}
                            />
                        </div>
                        <div className='w-[35rem] h-[5rem] bg-slate-100 rounded-[0.1rem] text-center'>
                            <span className='capitalized text-7xl'>max verstappen</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
