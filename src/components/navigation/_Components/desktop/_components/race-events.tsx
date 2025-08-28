import { GrandPrix } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import NavDropdownLayout from '@/components/layouts/nav-dropdown-layout';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Card } from '@/components/ui/card';

interface RaceEventsProps {
    races: GrandPrix[];
}

export default function RaceEvents({ races }: RaceEventsProps) {
    const formatDate = (dateString: string) => {
        const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short' };
        return new Date(dateString).toLocaleDateString('en-NL', options);
    };

    return (
        <NavDropdownLayout data-slot='race-events'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {races.map((race, index) => (
                    <Link key={index} href={`/schedule/${race.id}`}>
                        <Card className='relative overflow-hidden group dark'>
                            <div className='relative h-80 w-full'>
                                <Image
                                    alt={`${race.name}`}
                                    className='object-cover transition-transform duration-300 group-hover:scale-105'
                                    fill
                                    loading='eager'
                                    src={`${race.imageUrl}`}
                                />
                                <div className='absolute inset-0 bg-black/40' />
                            </div>

                            <div className='absolute inset-0 p-6 flex flex-col justify-between'>
                                <div className='text-white/80 text-lg font-medium uppercase'>
                                    {index === 0 ? 'previous' : index === 1 ? 'next' : 'upcoming'}
                                </div>

                                <div className='space-y-2'>
                                    <h2 className='group-hover:underline text-white text-3xl font-bold leading-tight capitalize'>
                                        {race.id}
                                    </h2>
                                    <div className='text-white/80 text-base font-medium'>
                                        {formatDate(race.dateStart)} - {formatDate(race.dateEnd)}
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Link>
                ))}
            </div>
            <Separator className='dark my-4' />
            <div className='w-full'>
                <Button asChild className='capitalize text-white dark' variant='ghost'>
                    <Link href='/schedule'>full schedule</Link>
                </Button>
            </div>
        </NavDropdownLayout>
    );
}
