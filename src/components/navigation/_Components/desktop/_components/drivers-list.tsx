'use client';

import Image from 'next/image';
import Link from 'next/link';
import { teamBackgroundColor, getTeamVariable } from '@/utils/team-colors';

import { Button } from '@/components/ui/button';
import { Driver } from '@/types';
import { Separator } from '@/components/ui/separator';
import NavDropdownLayout from '@/components/layouts/nav-dropdown-layout';

type DriverListProps = {
    drivers: Driver[];
};

interface driverBadgeProps {
    driver: Driver;
}

const DriverButtonItems = [
    {
        name: 'all drivers',
        url: '/drivers'
    },
    {
        name: 'hall of fame',
        url: '/drivers/hall-of-fame'
    }
];

const DriverBadge = ({ driver }: driverBadgeProps) => {
    const teamVar = teamBackgroundColor(driver.team.id);

    return (
        <>
            <Button asChild data-slot='driver-badge' size='lg' variant='ghost'>
                <Link
                    className='flex items-center justify-start w-full text-left transition-colors duration-200'
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = `rgb(var(${getTeamVariable(driver.team.id)}) / 0.2)`;
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '';
                    }}
                    href={`/drivers/${driver.givenName}-${driver.familyName}`}>
                    <div className='flex justify-center gap-1'>
                        <span
                            className={`rounded-full overflow-hidden size-7 shadow-md ${teamBackgroundColor(driver.team.id)}`}>
                            <Image
                                alt={`${driver.givenName} ${driver.familyName}`}
                                className='object-top'
                                height={250}
                                loading='lazy'
                                quality={25}
                                src={driver.mugshotUrl}
                                width={100}
                            />
                        </span>
                        <span className='flex gap-1 text-xl text-white'>
                            <span className='capitalize'>{driver.givenName}</span>
                            <span className='uppercase font-extrabold'>{driver.familyName}</span>
                        </span>
                    </div>
                    <span className='sr-only'>{`${driver.givenName} ${driver.familyName}`}</span>
                </Link>
            </Button>
        </>
    );
};

export default function DriversList({ drivers }: DriverListProps) {
    return (
        <NavDropdownLayout data-slot='drivers-list'>
            <div className='mb-5 grid grid-cols-4 gap-2.5'>
                {drivers.map((driver, index) => (
                    <DriverBadge key={index} driver={driver} />
                ))}
            </div>
            <Separator className='dark' />
            <div className='my-4 flex gap-2'>
                {DriverButtonItems.map((item, index) => (
                    <Button asChild className='dark text-white' key={index} variant='ghost'>
                        <Link href={item.url}>{item.name}</Link>
                    </Button>
                ))}
            </div>
        </NavDropdownLayout>
    );
}
