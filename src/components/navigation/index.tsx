import Link from 'next/link';

import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { Button } from '../ui/button';

export default function Navigation() {
    return (
        <NavigationMenu className='md:max-w-7xl flex justify-between p-3 mx-auto'>
            <NavigationMenuList>
                <NavigationMenuItem className='hover:cursor-pointer'>
                    <Link href='#' legacyBehavior passHref>
                        <p className='font-bold text-4xl'>F1 Tracker</p>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href='/' legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>Home</NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href='#' legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>Drivers</NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href='#' legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>Teams</NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href='#' legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>Circuits</NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href='#' legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>Stats</NavigationMenuLink>
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
