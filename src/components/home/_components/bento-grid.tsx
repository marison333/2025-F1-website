import Image from 'next/image';
import Link from 'next/link';

import { Card } from '@/components/ui/card';

interface BentoGridItemProps {
    title: string;
    text?: string;
    imageSrc: string;
    imageAlt: string;
    linkHref?: string;
    type: 'hero' | 'small';
}

const BentoGridItems: BentoGridItemProps[] = [
    {
        title: 'Look at all statistics right here',
        imageSrc: '/images/home/bento-grid/battle.png',
        imageAlt: 'image of 2 formula one cars racing',
        type: 'hero'
    },
    {
        title: 'Standings',
        text: 'Check the latest drivers standings',
        imageSrc: '/images/home/bento-grid/standings.png',
        imageAlt: 'formula one race drivers celebrating on the podium',
        linkHref: '/results/drivers',
        type: 'small'
    },
    {
        title: 'Legends',
        text: 'Explore the legends of the sport',
        imageSrc: '/images/home/bento-grid/history.jpg',
        imageAlt: 'old photo of a formula one race',
        linkHref: '/drivers/hall-of-fame',
        type: 'small'
    },
    {
        title: 'Drivers',
        text: 'Search for your favorite driver and see their stats',
        imageSrc: '/images/home/bento-grid/driver.png',
        imageAlt: 'image of a formula one driver',
        linkHref: '/drivers',
        type: 'small'
    },
    {
        title: 'Teams',
        text: 'Discover the teams competing in the championship',
        imageSrc: '/images/home/bento-grid/team.jpeg',
        imageAlt: 'image of formula one teams',
        linkHref: '/teams',
        type: 'small'
    },
    {
        title: 'Explore the circuits',
        imageSrc: '/images/home/bento-grid/circuit.jpeg',
        imageAlt: 'image of a formula one circuit',
        type: 'hero'
    }
];

const HeroCard = ({ title, imageSrc, imageAlt, linkHref }: BentoGridItemProps) => {
    const CardContent = () => (
        <Card className='relative w-full flex col-span-1 overflow-hidden'>
            <span className='flex-1'>
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={500}
                    height={500}
                    className='object-cover w-full h-full'
                />
            </span>
            <div className='bg-gradient-to-b from-transparent to-black absolute z-20 bottom-0 left-0 right-0 p-4 w-full'>
                <span className='text-white md:text-2xl font-semibold'>{title}</span>
            </div>
        </Card>
    );

    return linkHref ? (
        <Link href={linkHref}>
            <CardContent />
        </Link>
    ) : (
        <CardContent />
    );
};

const SmallCard = ({ title, text, imageSrc, imageAlt, linkHref }: BentoGridItemProps) => {
    const CardContent = () => (
        <Card className='group overflow-hidden size-full'>
            <div>
                <div>
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        width={500}
                        height={500}
                        className='object-cover w-full h-full'
                    />
                </div>
                <div className='p-2'>
                    <h3 className='md:text-lg font-semibold group-hover:underline'>{title}</h3>
                    {text && <p className='text-sm text-gray-500'>{text}</p>}
                </div>
            </div>
        </Card>
    );

    return linkHref ? (
        <Link href={linkHref}>
            <CardContent />
        </Link>
    ) : (
        <CardContent />
    );
};

export default function BentoGrid() {
    const heroItems = BentoGridItems.filter((item) => item.type === 'hero');
    const smallItems = BentoGridItems.filter((item) => item.type === 'small');

    return (
        <div className='py-10'>
            <h2 className='uppercase'>Find what you like</h2>
            <div
                className='relative md:w-full md:[&>*]:h-[20rem] flex flex-wrap md:grid md:grid-cols-2 md:grid-rows-2 gap-2'
                data-slot='bento-grid'>
                {heroItems[0] && <HeroCard {...heroItems[0]} />}

                <div className='grid grid-cols-2 gap-2 [&>*]:overflow-hidden'>
                    {smallItems.slice(0, 2).map((item, index) => (
                        <SmallCard key={`small-1-${index}`} {...item} />
                    ))}
                </div>

                <div className='grid grid-cols-2 gap-2 [&>*]:group [&>*]:overflow-hidden'>
                    {smallItems.slice(2, 4).map((item, index) => (
                        <SmallCard key={`small-2-${index}`} {...item} />
                    ))}
                </div>

                {heroItems[1] && <HeroCard {...heroItems[1]} />}
            </div>
        </div>
    );
}
