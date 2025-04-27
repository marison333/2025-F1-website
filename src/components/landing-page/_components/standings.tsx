import Link from 'next/link';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Standings() {
    return (
        <Tabs className='h-[50rem]' defaultValue='drivers'>
            <TabsList className='w-xl mx-auto'>
                <TabsTrigger value='drivers'>Drivers</TabsTrigger>
                <TabsTrigger value='teams'>Teams</TabsTrigger>
                <TabsTrigger value='race'>Last Race</TabsTrigger>
            </TabsList>
            <h1 className='font-bold text-4xl text-center mb-2'>Standings</h1>

            <TabsContent value='drivers'>
                <div className='flex justify-center gap-2 pt-12 mb-8'>
                    <Card className='secondary-standings-card h-[12rem] w-[17rem] mt-8'>2nd</Card>
                    <Card className='primary-standings-card h-[14rem] w-[19rem]'>1st</Card>
                    <Card className='secondary-standings-card h-[12rem] w-[17rem] mt-8'>3rd</Card>
                </div>
                <div>
                    <Card className='p-4 max-w-[60rem] mx-auto'>
                        <ul className='gap-0.5'>
                            {[...Array(6)].map((_, index) => {
                                const i = index + 4;
                                return (
                                    <li key={i}>
                                        <Link href='#'>
                                            <Card className='rounded-sm hover:bg-muted'>
                                                <div className='flex h-12 items-center justify-between text-md p-2'>
                                                    <div className='flex p-1 items-center gap-2'>
                                                        <span className='font-bold text-lg'>
                                                            {i}
                                                        </span>
                                                        <span className='text-lg'>Driver name</span>
                                                        <span className='text-sm text-muted-foreground'>
                                                            Team Name
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <span className='text-muted-foreground'>
                                                            20
                                                        </span>
                                                        <span className='text-muted-foreground'>
                                                            pts
                                                        </span>
                                                    </div>
                                                </div>
                                            </Card>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </Card>
                </div>
                <div className='flex justify-center mt-8'>
                    <Button>View full standings</Button>
                </div>
            </TabsContent>
            <TabsContent value='teams'>
                <div className='flex justify-center gap-2 pt-12 mb-8'>
                    <Card className='secondary-standings-card h-[12rem] w-[17rem] mt-8'>2nd</Card>
                    <Card className='primary-standings-card h-[14rem] w-[19rem]'>1st</Card>
                    <Card className='secondary-standings-card h-[12rem] w-[17rem] mt-8'>3rd</Card>
                </div>
                <div>
                    <Card className='p-4 max-w-[60rem] mx-auto'>
                        <ul className='gap-0.5'>
                            {[...Array(6)].map((_, index) => {
                                const i = index + 4;
                                return (
                                    <li key={i}>
                                        <Link href='#'>
                                            <Card className='rounded-sm hover:bg-muted'>
                                                <div className='flex h-12 items-center justify-between text-md p-2'>
                                                    <div className='flex p-1 items-center gap-2'>
                                                        <span className='font-bold'>{i}</span>
                                                        <span>Team name</span>
                                                    </div>
                                                    <div>
                                                        <span className='text-muted-foreground'>
                                                            20
                                                        </span>
                                                        <span className='text-muted-foreground'>
                                                            pts
                                                        </span>
                                                    </div>
                                                </div>
                                            </Card>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </Card>
                </div>
                <div className='flex justify-center mt-8'>
                    <Button>View full standings</Button>
                </div>
            </TabsContent>
            <TabsContent value='race'>
                <Card className='p-4 max-w-[60rem] mx-auto'>
                    {/* @TODO: loop rows */}
                    <ul className='gap-0.5'>
                        {[...Array(11)].map((_, index) => {
                            const i = index + 1;
                            return (
                                <li key={i}>
                                    <Link href='#'>
                                        <Card className='rounded-sm hover:bg-muted'>
                                            <div className='flex h-12 items-center justify-between text-md p-2'>
                                                <div className='flex p-1 items-center gap-2'>
                                                    <span className='font-bold text-lg'>{i}</span>
                                                    <span className='text-lg'>Driver name</span>
                                                    <span className='text-sm text-muted-foreground'>
                                                        Team Name
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className='text-muted-foreground'>
                                                        20
                                                    </span>
                                                    <span className='text-muted-foreground'>
                                                        pts
                                                    </span>
                                                </div>
                                            </div>
                                        </Card>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </Card>
                <div className='flex justify-center mt-8'>
                    <Button>View full standings</Button>
                </div>
            </TabsContent>
        </Tabs>
    );
}
