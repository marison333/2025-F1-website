import Link from 'next/link';

import { Card } from '../ui/card';
import { Separator } from '../ui/separator';

export default function Footer() {
    return (
        <footer>
            <Card>
                <div className='p-4'>
                    <div className='gap-4 mb-4'>
                        <div className='w-[50rem] h-5xl'>
                            <h2 className='text-2xl font-bold'>F1 Tracker</h2>
                            <p className='text-sm text-muted-foreground'>
                                This is a sample footer. You can add your own content here.
                            </p>
                        </div>
                        <div className='w-[50rem] h-[15rem]'>
                            <h2 className='text-2xl'>Navigate</h2>
                            <ol className='list-none'>
                                <li>
                                    <Link href='#'>Home</Link>
                                </li>
                                <li>
                                    <Link href='#'>Drivers</Link>
                                </li>
                                <li>
                                    <Link href='#'>Teams</Link>
                                </li>
                                <li>
                                    <Link href='#'>Circuits</Link>
                                </li>
                            </ol>
                        </div>
                    </div>
                    <Separator />
                    <div className='flex justify-between items-center mt-4'>
                        <span>
                            Build By{' '}
                            <a href='#' target='_blank' className='hover:cursor-pointer'>
                                @Marison
                            </a>
                        </span>
                        <ol className='flex gap-4 list-none'>
                            <li>
                                <a href='' target='_blank'>
                                    Github
                                </a>
                            </li>
                            <li>
                                <a href='' target='_blank'>
                                    X
                                </a>
                            </li>
                            <li>
                                <a href='' target='_blank'>
                                    Instagram
                                </a>
                            </li>
                        </ol>
                    </div>
                </div>
            </Card>
        </footer>
    );
}
