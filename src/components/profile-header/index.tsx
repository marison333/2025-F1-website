'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectTrigger, SelectContent, SelectItem } from '@/components/ui/select';
import { SelectValue } from '@/components/ui/select';

const DriverProfileLabels: string[] = ['statistics', 'biography'];
const TeamProfileLabels: string[] = ['drivers', 'statistics', 'profile'];

const executeScroll = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

export const ProfileHeader = () => {
    const pathname = usePathname();
    const isTeamPage = pathname.includes('/teams/');
    const isDriverPage = pathname.includes('/drivers/');

    const labels = isTeamPage ? TeamProfileLabels : DriverProfileLabels;
    const backHref = isTeamPage ? '/teams' : '/drivers';
    const backText = isTeamPage ? 'Back to Teams' : 'Back to Drivers';

    const headerButtons = () => {
        return (
            <div className='flex'>
                {labels.map((button) => (
                    <Button
                        className='capitalize'
                        key={button}
                        onClick={() => executeScroll(button)}
                        variant='link'>
                        {button}
                    </Button>
                ))}
            </div>
        );
    };

    const ProfileSectionSelect = () => {
        return (
            <Select onValueChange={(section) => executeScroll(section)}>
                <SelectTrigger className='w-25 py-1 px-1 my-2 border-transparent bg-transparent capitalize'>
                    <SelectValue placeholder={labels[0]} />
                </SelectTrigger>
                <SelectContent className='w-25'>
                    {labels.map((button) => (
                        <SelectItem key={button} value={button} className='capitalize'>
                            {button}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        );
    };

    return (
        <div
            className='sticky z-0 left-0 top-0 md:h-10 w-screen mx-[-52vw] bg-white'
            data-slot='driver-header'>
            <div className='relative max-w-360 mx-auto flex items-center justify-around md:justify-between'>
                <Button asChild className='capitalize' variant='ghost'>
                    <Link href={backHref}>
                        <ArrowLeft />
                        {backText}
                    </Link>
                </Button>
                <div>
                    <div className='hidden md:flex'>{headerButtons()}</div>
                    <div className='md:hidden'>
                        <ProfileSectionSelect />
                    </div>
                </div>
            </div>
        </div>
    );
};
