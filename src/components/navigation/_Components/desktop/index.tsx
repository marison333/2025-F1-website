import Link from 'next/link';
import { Driver, GrandPrix, Team } from '@/types';
import { getDrivers } from '@/lib/data/drivers';
import { getTeams } from '@/lib/data/teams';
import { getGrandPrixData } from '@/lib/data/grand-prix';

import DriversList from './_components/drivers-list';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger
} from '@/components/ui/navigation-menu';
import RaceEvents from './_components/race-events';
import ResultsLinks from './_components/results-links';
import TeamsList from './_components/teams-list';

export default async function DesktopNavigation() {
    const response = {
        drivers: getDrivers(),
        teams: getTeams(),
        races: getGrandPrixData()
    };

    const data = {
        drivers: await response.drivers,
        teams: await response.teams,
        races: await response.races
    };

    const drivers: Driver[] = [...data.drivers].sort((a, b) =>
        (a.familyName || '').localeCompare(b.familyName || '')
    );

    const teams: Team[] = [...data.teams].sort((a, b) => (a.id || '').localeCompare(b.id || ''));

    const races: GrandPrix[] = [...data.races].sort((a, b) =>
        (a.dateStart || '').localeCompare(b.dateStart || '')
    );
    const upcomingRaces = races.slice(0, 4);

    return (
        <header>
            <div className='sticky top-0 left-0 right-0 z-10 w-full h-20 bg-zinc-900'>
                <div className='w-full xl:w-[90rem] mx-auto h-full flex items-center justify-between'>
                    <NavigationMenu>
                        <NavigationMenuList className='text-white'>
                            <NavigationMenuItem
                                asChild
                                className='hover:cursor-pointer border-none'>
                                <Link className='uppercase font-bold text-4xl' href='/'>
                                    <span>f1 vaulted</span>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Schedule</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <RaceEvents races={upcomingRaces} />
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Results</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ResultsLinks />
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Drivers</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <DriversList drivers={drivers} />
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Teams</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <TeamsList teams={teams} />
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            </div>
        </header>
    );
}
