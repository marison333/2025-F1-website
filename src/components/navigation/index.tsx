import Link from 'next/link';
import { Team } from '@/types';

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu';
import { Button } from '../ui/button';
import { Separator } from '@/components/ui/separator';
import { SquareArrowOutUpRight } from 'lucide-react';

// @TODO: create mock data for drivers and teams
// @TODO: Create api endpoint to fetch drivers and teams

interface Driver {
    givenName: string;
    familyName: string;
}

const drivers: Driver[] = [
    { givenName: 'lewis', familyName: 'hamilton' },
    { givenName: 'max', familyName: 'verstappen' },
    { givenName: 'charles', familyName: 'leclerc' },
    { givenName: 'george', familyName: 'russell' },
    { givenName: 'sergio', familyName: 'perez' },
    { givenName: 'carlos', familyName: 'sainz' },
    { givenName: 'lando', familyName: 'norris' },
    { givenName: 'pierre', familyName: 'gasly' },
    { givenName: 'esteban', familyName: 'ocon' },
    { givenName: 'fernando', familyName: 'alonso' },
    { givenName: 'lance', familyName: 'stroll' },
    { givenName: 'oscar', familyName: 'piastri' },
    { givenName: 'alex', familyName: 'albon' },
    { givenName: 'logan', familyName: 'sargeant' },
    { givenName: 'kevin', familyName: 'magnussen' },
    { givenName: 'nico', familyName: 'hulkenberg' },
    { givenName: 'yuki', familyName: 'tsunoda' },
    { givenName: 'liam', familyName: 'lawson' },
    { givenName: 'valtteri', familyName: 'bottas' },
    { givenName: 'guanyu', familyName: 'zhou' }
];

const teams: Team[] = [
    { id: 'Mercedes', name: 'Mercedes' },
    { id: 'red_bull', name: 'Red Bull Racing' },
    { id: 'ferrari', name: 'Ferrari' },
    { id: 'mclaren', name: 'McLaren' },
    { id: 'alpine', name: 'Alpine' },
    { id: 'aston_martin', name: 'Aston Martin' },
    { id: 'alpha_tauri', name: 'AlphaTauri' },
    { id: 'williams', name: 'Williams' },
    { id: 'haas', name: 'Haas' },
    { id: 'alfa_romeo', name: 'Alfa Romeo' }
];

export default function Navigation() {
    return (
        <header className='fixed flex justify-center z-90 w-full h-21 border-b-2 bg-white'>
            <NavigationMenu className='max-w-[90rem] justify-between'>
                <NavigationMenuList className='max-w-[90rem]'>
                    <NavigationMenuItem asChild className='hover:cursor-pointer border-none'>
                        <Link className='uppercase font-bold text-4xl' href='/'>
                            f1 vaulted
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Drivers</NavigationMenuTrigger>
                        <NavigationMenuContent className='mt-0'>
                            <div className='w-[70rem]'>
                                <div className='pl-8 p-4'>
                                    <Button variant='link'>
                                        <Link href='/current-grid' className='capitalize text-2xl'>
                                            current grid
                                        </Link>
                                    </Button>
                                    <Button variant='link'>
                                        {/* @TODO: Add link to teams archive */}
                                        <Link href='#' className='capitalize text-2xl'>
                                            world champions
                                        </Link>
                                    </Button>
                                    <Button variant='link'>
                                        {/* @TODO: Add link to drivers archive */}
                                        <Link href='#' className='capitalize text-2xl'>
                                            drivers archive
                                        </Link>
                                    </Button>
                                </div>
                                <Separator />
                                <ul className='grid grid-cols-4 grid-rows-5 gap-4 p-8'>
                                    {drivers.map((driver, index) => (
                                        <li key={index} className='w-[13rem]'>
                                            <Button
                                                asChild
                                                className='flex justify-between'
                                                variant='link'
                                                size='lg'>
                                                {/* @TODO: Add link to driver details */}
                                                <Link className='capitalize text-xl' href='#'>
                                                    {driver.givenName} {driver.familyName}
                                                    <SquareArrowOutUpRight />
                                                </Link>
                                            </Button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Teams</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <div className='w-[70rem]'>
                                <div className='pl-8 p-4'>
                                    <Button variant='link'>
                                        {/* @TODO: Add link to current teams */}
                                        <Link href='#' className='capitalize text-2xl'>
                                            current teams
                                        </Link>
                                    </Button>
                                    <Button variant='link'>
                                        {/* @TODO: Add link to teams archive */}
                                        <Link href='#' className='capitalize text-2xl'>
                                            archive
                                        </Link>
                                    </Button>
                                </div>
                                <Separator />
                                <ul className='grid grid-cols-4 grid-rows-5 gap-4 p-8'>
                                    {teams.map((team) => (
                                        <li key={team.id} className='w-[13rem]'>
                                            <Button
                                                asChild
                                                className='flex justify-between'
                                                variant='link'
                                                size='lg'>
                                                <Link className='capitalize text-xl' href='#'>
                                                    {team.name}
                                                    <SquareArrowOutUpRight />
                                                </Link>
                                            </Button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link className={navigationMenuTriggerStyle()} href='#'>
                            Standings
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link className={navigationMenuTriggerStyle()} href='#'>
                            Circuits
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link className={navigationMenuTriggerStyle()} href='#'>
                            More
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>

                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Button variant='outline' className='w-full h-full'>
                            In beta
                        </Button>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </header>
    );
}
