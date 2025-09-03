'use client';

import Link from 'next/link';
import Image from 'next/image';

import { Driver } from '@/types/index';
import { teamGradientColor } from '@/utils/team-colors';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from '@/components/ui/carousel';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

interface DriverCarouselProps {
    drivers: Driver[];
}

interface DriverCardProps {
    items: Driver;
}

const DriverCard: React.FC<DriverCardProps> = ({ items }) => {
    return (
        <Card
            className={`group h-[12rem] md:h-[15rem] w-[9rem] md:w-[12rem] overflow-hidden bg-gradient-to-br ${teamGradientColor(items.team.id)} to-stone-800`}>
            <Image
                src={items.mugshotUrl}
                alt={`Picture of ${items.givenName} ${items.familyName}`}
                className='object-center'
                width={200}
                height={400}
                loading='lazy'
            />
            <div className='relative z-10 bottom-85 md:bottom-110 flex flex-col items-center justify-center p-2 text-slate-100 group-hover:underline bg-gradient-to-t from-black/90 to-transparent'>
                <span>{items.givenName}</span>
                <span className='font-extrabold'>{items.familyName}</span>
            </div>
        </Card>
    );
};

export function DriverCarousel({ drivers }: DriverCarouselProps) {
    drivers.sort((a, b) => a.team.id.localeCompare(b.team.id));

    const handlePrevious = () => {
        const prevButton = document.querySelector(
            '[data-slot="carousel-previous"]'
        ) as HTMLButtonElement;
        prevButton?.click();
    };

    const handleNext = () => {
        const nextButton = document.querySelector(
            '[data-slot="carousel-next"]'
        ) as HTMLButtonElement;
        nextButton?.click();
    };

    return (
        <>
            <div className='w-screen md:w-full mx-auto' data-slot='driver-carousel'>
                <div className='w-full mb-2 flex items-center justify-between'>
                    <h3 className='uppercase font-bold'>drivers</h3>
                    <div className='flex gap-2'>
                        <Button variant='outline' onClick={handlePrevious}>
                            <ChevronLeft />
                        </Button>
                        <Button variant='outline' onClick={handleNext}>
                            <ChevronRight />
                        </Button>
                    </div>
                </div>
                <Carousel className='w-full'>
                    <CarouselContent>
                        {drivers.map((driver) => (
                            <Link
                                href={`/drivers/${driver.givenName}-${driver.familyName}`}
                                key={driver.code}>
                                <CarouselItem>
                                    <DriverCard items={driver} />
                                </CarouselItem>
                            </Link>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious hidden />
                    <CarouselNext hidden />
                </Carousel>
            </div>

            <Separator className='mx-auto my-4 max-w-[95rem]' />
        </>
    );
}
