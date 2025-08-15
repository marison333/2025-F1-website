import Link from 'next/link';
import Image from 'next/image';

import { Driver } from '@/types/index';
import { getDrivers } from '@/lib/data/drivers';
import { teamGradientColor } from '@/utils/team-colors';

import { Card } from '@/components/ui/card';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from '@/components/ui/carousel';
import { Separator } from '@/components/ui/separator';

const DriverCard: React.FC<{ items: Driver }> = ({ items }) => {
    return (
        <Card
            className={`group max-h-[15rem] w-[12rem] overflow-hidden bg-gradient-to-br ${teamGradientColor(items.team.id)} to-stone-800`}>
            <Image
                src={items.mugshotUrl}
                alt={`Picture of ${items.givenName} ${items.familyName}`}
                className='object-center'
                width={200}
                height={400}
                loading='lazy'
            />
            <div className='relative z-10 bottom-110 flex flex-col items-center justify-center p-2 text-slate-100 group-hover:underline bg-gradient-to-t from-black/90 to-transparent'>
                <span>{items.givenName}</span>
                <span>{items.familyName}</span>
            </div>
        </Card>
    );
};

export async function DriverCarousel() {
    const driversData: Driver[] = await getDrivers();
    driversData.sort((a, b) => a.team.id.localeCompare(b.team.id));

    return (
        <>
            <div className='w-full mx-auto' data-slot='driver-carousel'>
                <div className='w-full mb-2'>
                    <h3 className='uppercase font-bold'>drivers</h3>
                </div>
                <Carousel className='w-full'>
                    <CarouselContent>
                        {driversData.map((driver) => (
                            <Link
                                href={`/drivers/${driver.givenName}-${driver.familyName}`}
                                key={driver.code}>
                                {/* @TODO: Implement driver link when driver profile page is available */}
                                <CarouselItem>
                                    <DriverCard items={driver} />
                                </CarouselItem>
                            </Link>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>

            <Separator className='mx-auto my-4 max-w-[95rem]' />
        </>
    );
}
