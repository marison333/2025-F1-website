import Link from 'next/link';
import Image from 'next/image';

import '../styles/current-grid.css';

import CurrentGridLayout from '@/components/layouts/current-grid-layout';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';

type Title = {
    message: string;
    year: string;
};

const title: Title = {
    message: 'current grid',
    year: '2025'
};

// @TODO: Add more drivers to the list and make it dynamic by fetching from an API
interface Drivers {
    code: string;
    dateOfBirth: string;
    driverAlt: string;
    driverId: string;
    driverImg: string;
    familyName: string;
    flagAlt: string;
    flagSrc: string;
    givenName: string;
    href: string;
    nationality: string;
    permenentNumber: string;
    team: string;
}

// @TODO: create mock data and or fetch from an API
// @TODO: create seperate file for drivers data
const drivers: Drivers[] = [
    {
        driverId: 'o-pia',
        permenentNumber: '44',
        givenName: 'oscar',
        familyName: 'piastri',
        flagSrc: 'au',
        flagAlt: 'Australian Flag',
        team: 'Mclaren',
        driverImg: '/images/drivers/o-pia/o-piastri.png',
        driverAlt: 'Driver Oscar Piastri',
        href: '#',
        nationality: 'Australian',
        dateOfBirth: '2001-04-06',
        code: 'PIA'
    },
    {
        driverId: 'm-ver',
        permenentNumber: '1',
        givenName: 'max',
        familyName: 'verstappen',
        flagSrc: 'nl',
        flagAlt: 'Dutch Flag',
        team: 'Red Bull Racing',
        driverImg: '/images/drivers/m-ver/m-verstappen.png',
        driverAlt: 'Driver Max Verstappen',
        href: '#',
        nationality: 'Dutch',
        dateOfBirth: '1997-09-30',
        code: 'VER'
    },
    {
        driverId: 'l-nor',
        permenentNumber: '4',
        givenName: 'lando',
        familyName: 'norris',
        flagSrc: 'gb',
        flagAlt: 'British Flag',
        team: 'Mclaren',
        driverImg: '/images/drivers/l-nor/l-norris.png',
        driverAlt: 'Driver Lando Norris',
        href: '#',
        nationality: 'British',
        dateOfBirth: '1999-11-13',
        code: 'NOR'
    },
    {
        driverId: 'c-lec',
        permenentNumber: '16',
        givenName: 'charles',
        familyName: 'leclerc',
        flagSrc: 'mc',
        flagAlt: 'Monaco Flag',
        team: 'scuderia ferrari',
        driverImg: '/images/drivers/c-lec/c-leclerc.png',
        driverAlt: 'Driver Charles Leclerc',
        href: '#',
        nationality: 'Monacan',
        dateOfBirth: '1997-10-16',
        code: 'LEC'
    },
    {
        driverId: 'l-ham',
        permenentNumber: '44',
        givenName: 'lewis',
        familyName: 'hamilton',
        flagSrc: 'gb',
        flagAlt: 'British Flag',
        team: 'mercedes',
        driverImg: '/images/drivers/l-ham/l-hamilton.png',
        driverAlt: 'Driver Lewis Hamilton',
        href: '#',
        nationality: 'British',
        dateOfBirth: '1985-01-07',
        code: 'HAM'
    },
    {
        driverId: 'g-rus',
        permenentNumber: '63',
        givenName: 'george',
        familyName: 'russell',
        flagSrc: 'gb',
        flagAlt: 'British Flag',
        team: 'mercedes',
        driverImg: '/images/drivers/g-rus/g-russell.png',
        driverAlt: 'Driver George Russell',
        href: '#',
        nationality: 'British',
        dateOfBirth: '1998-02-15',
        code: 'RUS'
    },
    {
        driverId: 's-per',
        permenentNumber: '11',
        givenName: 'sergio',
        familyName: 'perez',
        flagSrc: 'mx',
        flagAlt: 'Mexican Flag',
        team: 'red bull racing',
        driverImg: '/images/drivers/s-per/s-perez.png',
        driverAlt: 'Driver Sergio Perez',
        href: '#',
        nationality: 'Mexican',
        dateOfBirth: '1990-01-26',
        code: 'PER'
    },
    {
        driverId: 'c-sai',
        permenentNumber: '55',
        givenName: 'carlos',
        familyName: 'sainz jr.',
        flagSrc: 'es',
        flagAlt: 'Spanish Flag',
        team: 'scuderia ferrari',
        driverImg: '/images/drivers/c-sai/c-sainz.png',
        driverAlt: 'Driver Carlos Sainz Jr.',
        href: '#',
        nationality: 'Spanish',
        dateOfBirth: '1994-09-01',
        code: 'SAI'
    }
];

export function Overview() {
    return (
        <CurrentGridLayout>
            <div>
                <h1 className='uppercase'>
                    {title.message} {title.year}
                </h1>
                <p className='text-2xl ml-1'>
                    Find the current drivers of the {title.year} Formula 1 season below
                </p>
            </div>
            <p className='text-xl font-bold [&>*]:text-lg [&>*]:capitalize'>
                Sort by:
                <Button variant={'link'}>
                    <span>name</span>
                </Button>
                <Button variant={'link'}>
                    <span>team</span>
                </Button>
                <Button variant={'link'}>
                    <span>standings</span>
                </Button>
            </p>
            <Separator />
            <div className='py-4'>
                <ul className='w-full flex flex-wrap gap-2'>
                    {drivers.map((driver) => (
                        <li key={driver.driverId}>
                            <Link href={driver.href}>
                                {/* @TODO: update href when public API is available */}
                                <Card className='bg-slate-50 md:w-[22rem] max-w-[] rounded-[0.2rem] hover:border-slate-800'>
                                    <CardHeader>
                                        <div className='flex flex-col'>
                                            <div className='flex justify-between items-center p-2'>
                                                <div className='flex flex-col'>
                                                    <span className='capitalize leading-tight'>
                                                        {driver.givenName}
                                                    </span>
                                                    <span className='uppercase font-bold text-xl leading-tight'>
                                                        {driver.familyName}
                                                    </span>
                                                </div>
                                                <div>
                                                    <span>
                                                        <Image
                                                            alt={driver.flagAlt}
                                                            className='rounded-[0.2rem] border border-slate-500'
                                                            height={60}
                                                            src={`/icons/flags/${driver.flagSrc}.svg`}
                                                            width={50}
                                                        />
                                                    </span>
                                                </div>
                                            </div>
                                            <Separator />
                                            <span className='capitalize text-sm text-muted-foreground p-2'>
                                                {driver.team}
                                            </span>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <Image
                                            alt={driver.driverAlt}
                                            className='object-cover rounded-md'
                                            height={400}
                                            src={driver.driverImg}
                                            width={400}
                                        />
                                    </CardContent>
                                </Card>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </CurrentGridLayout>
    );
}
