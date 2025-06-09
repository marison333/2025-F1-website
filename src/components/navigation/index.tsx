import Link from 'next/link';

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu';
import { Button } from '../ui/button';

export default function Navigation() {
    return (
        <header className='fixed flex justify-center z-5 w-full h-21 border-b-2 bg-white'>
            <NavigationMenu className='max-w-[90rem] justify-between'>
                <NavigationMenuList className='max-w-[90rem]'>
                    <NavigationMenuItem className='hover:cursor-pointer'>
                        <Link href='/' passHref>
                            <span className='font-bold text-4xl'>F1 Tracker</span>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link className={navigationMenuTriggerStyle()} href='#'>
                            Drivers
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link className={navigationMenuTriggerStyle()} href='#'>
                            Teams
                        </Link>
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
