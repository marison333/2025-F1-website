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
        <NavigationMenu className='md:max-w-7xl flex p-2 my-2 mx-auto border-2 rounded-lg'>
            <div className='w-full p-1 flex justify-between border-2 rounded-md'>
                <NavigationMenuList>
                    <NavigationMenuItem className='hover:cursor-pointer'>
                        <Link href='/' passHref>
                            <span className='font-bold text-4xl'>F1 Tracker</span>
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
            </div>
        </NavigationMenu>
    );
}
