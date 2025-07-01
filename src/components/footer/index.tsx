import Link from 'next/link';

import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import { Github } from 'lucide-react';

const pages: { name: string; href: string }[] = [
    { name: 'Home', href: '/' },
    { name: 'Schedule', href: '/schedule' },
    { name: 'Drivers', href: '/drivers' },
    { name: 'Teams', href: '/teams' },
    { name: 'Results', href: '/results' }
];

export default function Footer() {
    return (
        <footer className='w-full border-t-2 bg-zinc-900 text-neutral-300'>
            <div className='max-w-[90rem] mx-auto py-2'>
                <div>
                    <h1 className='uppercase text-6xl'>formula one vaulted</h1>
                </div>
                <div>
                    <ul className='w-full flex flex-wrap items-center gap-7'>
                        {pages.map((page) => (
                            <li key={page.name}>
                                <Button asChild className='p-0' variant='link'>
                                    <Link href={page.href}>
                                        <span className='text-neutral-300 text-2xl'>
                                            {page.name}
                                        </span>
                                    </Link>
                                </Button>
                            </li>
                        ))}
                    </ul>
                </div>
                <Separator className='my-4 border-neutral-300' />
                <div className='flex items-center justify-between'>
                    <ul>
                        <li>
                            <Button asChild variant='link' size='icon'>
                                <Link target='_blank' href='https://github.com/marison333/F1-Vaulted'>
                                    <Github className='text-neutral-300' />
                                    <span className='sr-only'>GitHub</span>
                                </Link>
                            </Button>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
