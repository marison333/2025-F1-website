'use client';

import Link from 'next/link';

import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectTrigger, SelectContent, SelectItem } from '@/components/ui/select';
import { SelectValue } from '@/components/ui/select';

const sectionLabels: string[] = ['statistics', 'biography'];

const executeScroll = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

const headerButtons = () => {
    return (
        <div className='flex'>
            {sectionLabels.map((button) => (
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
            <SelectTrigger className='w-[6.25rem] py-1 px-1 my-2 border-transparent bg-transparent capitalize'>
                <SelectValue placeholder='Statistics' />
            </SelectTrigger>
            <SelectContent className='w-[6.25rem]'>
                {sectionLabels.map((button) => (
                    <SelectItem key={button} value={button} className='capitalize'>
                        {button}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
};
export const DriverHeader = () => {
    return (
        <div
            className='sticky z-10 left-0 top-0 md:h-10 w-screen mx-[-52vw] bg-white'
            data-slot='driver-header'>
            <div className='relative max-w-[90rem] mx-auto flex items-center justify-around md:justify-between'>
                <Button asChild className='capitalize' variant='ghost'>
                    <Link href='/drivers'>
                        <ArrowLeft />
                        Back to Drivers
                    </Link>
                </Button>
                {/* if the screen width is less than 767px render the ProfileSectionSelect component otherwise render the headerButtons */}
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
