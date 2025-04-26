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
        <NavigationMenu className='md:max-w-7xl flex justify-between p-3 mx-auto'>
            <NavigationMenuList>
                <NavigationMenuItem className='hover:cursor-pointer'>
                    <Link href='/' passHref>
                        <p className='font-bold text-4xl'>F1 Tracker</p>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link className={navigationMenuTriggerStyle()} href='/'>
                        Home
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
            </NavigationMenuList>

            <NavigationMenuList>
                <NavigationMenuItem>
                    <Button variant='outline' className='w-full h-full'>
                        In beta
                    </Button>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}
