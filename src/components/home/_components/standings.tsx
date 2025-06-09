import Link from 'next/link';
import Image from 'next/image';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

{
    /* @TODO: implement dynamic standings data fetching */
}

export default function Standings() {
    return (
        <section data-slot='standings'>
            <Tabs defaultValue='drivers'>
                <TabsList className='w-xl mx-auto'>
                    <TabsTrigger value='drivers'>Drivers</TabsTrigger>
                    <TabsTrigger value='teams'>Teams</TabsTrigger>
                    <TabsTrigger value='race'>Last Race</TabsTrigger>
                </TabsList>

                {/* @TODO: implement dynamic standings data fetching */}
                <TabsContent value='drivers'>
                    <h1 className='font-bold text-4xl text-center mb-2'>Standings</h1>

                    <div className='flex items-center justify-center gap-2 pt-12 mb-8'>
                        <Card className='h-[18rem] w-[17rem] rounded-sm overflow-t-visible bg-white shadow-md flex flex-col justify-between'>
                            {/* Top Image */}
                            <div className='h-[60%] w-full flex items-center justify-center bg-white'>
                                <Image
                                    src='/images/home/standings/l-norris.png'
                                    alt='Second position in the championship driver Lando Norris'
                                    width={300}
                                    height={300}
                                />
                            </div>

                            {/* Info section */}
                            <CardFooter className='py-5 bg-[#0b1120] text-white rounded-b-sm'>
                                <div className='flex flex-row gap-1 items-center '>
                                    <div className='border-r-2 pr-2 border-gray-300 mr-2'>
                                        <span className='text-3xl font-bold'>#2</span>
                                    </div>
                                    <div className='flex flex-col'>
                                        <span className='space-x-2 capitalize text-xl text-gray-300'>
                                            lando
                                        </span>
                                        <span className='uppercase text-2xl font-bold tracking-wide'>
                                            norris
                                        </span>
                                    </div>
                                </div>
                            </CardFooter>
                        </Card>
                        <Card className='h-[20rem] w-[19rem] rounded-sm overflow-t-visible shadow-md flex flex-col justify-between'>
                            {/* Top Image */}
                            <div className='h-[60%] w-full flex items-center justify-center'>
                                <Image
                                    src='/images/home/standings/o-piastri.png'
                                    alt='Second position in the championship driver Oscar Piastri'
                                    width={300}
                                    height={300}
                                />
                            </div>

                            {/* Info section */}
                            <CardFooter className='py-5 bg-[#0b1120] text-white rounded-b-sm'>
                                <div className='flex flex-row gap-1 items-center '>
                                    <div className='border-r-2 pr-2 border-gray-300 mr-2'>
                                        <span className='text-3xl font-bold'>#1</span>
                                    </div>
                                    <div className='flex flex-col'>
                                        <span className='space-x-2 capitalize text-xl text-gray-300'>
                                            oscar
                                        </span>
                                        <span className='uppercase text-2xl font-bold tracking-wide'>
                                            piastri
                                        </span>
                                    </div>
                                </div>
                            </CardFooter>
                        </Card>
                        <Card className='h-[18rem] w-[17rem] rounded-sm overflow-t-visible bg-white shadow-md flex flex-col justify-between'>
                            {/* Top Image */}
                            <div className='h-[60%] w-full flex items-center justify-center bg-white'>
                                <Image
                                    src='/images/home/standings/m-verstappen.png'
                                    alt='Second position in the championship driver Max Verstappen'
                                    width={300}
                                    height={300}
                                />
                            </div>

                            {/* Info section */}
                            <CardFooter className='py-5 bg-[#0b1120] text-white rounded-b-sm'>
                                <div className='flex flex-row gap-1 items-center '>
                                    <div className='border-r-2 pr-2 border-gray-300 mr-2'>
                                        <span className='text-3xl font-bold'>#3</span>
                                    </div>
                                    <div className='flex flex-col'>
                                        <span className='space-x-2 capitalize text-xl text-gray-300'>
                                            max
                                        </span>
                                        <span className='uppercase text-2xl font-bold tracking-wide'>
                                            verstappen
                                        </span>
                                    </div>
                                </div>
                            </CardFooter>
                        </Card>
                    </div>
                    <div>
                        <Card className='p-4 max-w-[60rem] mx-auto'>
                            <ul className='gap-0.5'>
                                {[...Array(6)].map((_, index) => {
                                    const i = index + 1;
                                    return (
                                        <li key={i}>
                                            <Link href='#'>
                                                <Card className='rounded-sm hover:bg-muted'>
                                                    <div className='flex h-12 items-center justify-between text-md p-2'>
                                                        <div className='flex p-1 items-center gap-2'>
                                                            <span className='font-bold text-lg w-6 text-center'>
                                                                {i}
                                                            </span>
                                                            <span className='text-lg'>
                                                                Driver name
                                                            </span>
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
                        <Button asChild>
                            <Link href='/standings'>View full standings</Link>
                        </Button>
                    </div>
                </TabsContent>

                {/* @TODO: implement dynamic standings data fetching */}
                <TabsContent value='teams'>
                    <h1 className='font-bold text-4xl text-center mb-2'>Standings</h1>

                    <div className='flex items-center justify-center gap-2 pt-12 mb-8'>
                        <Card className='h-[18rem] w-[20rem] rounded-sm bg-white shadow-md flex flex-col justify-between'>
                            {/* Top Image */}
                            <div className='h-[60%] w-full flex items-center justify-center bg-white'>
                                <Image
                                    src='/images/home/standings/scuderia-ferrari-logo.png'
                                    alt='Second position in the constructors championship Scuderia Ferrari'
                                    width={250}
                                    height={250}
                                    className='object-contain'
                                />
                            </div>

                            {/* Info section */}
                            <CardFooter className='py-5 bg-[#0b1120] text-white rounded-b-sm'>
                                <div className='flex flex-row gap-1 items-center '>
                                    <div className='border-r-2 pr-2 border-gray-300 mr-2'>
                                        <span className='text-3xl font-bold'>#2</span>
                                    </div>
                                    <div className='flex flex-col'></div>
                                </div>
                            </CardFooter>
                        </Card>
                        <Card className='h-[20rem] w-[22rem] rounded-sm shadow-md flex flex-col justify-between'>
                            {/* Top Image */}
                            <div className='h-[60%] w-full flex items-center justify-center'>
                                <Image
                                    src='/images/home/standings/mclaren-logo.png'
                                    alt='First position in the constructors championship Mclaren F1 team'
                                    width={250}
                                    height={250}
                                    className='object-contain'
                                />
                            </div>

                            {/* Info section */}
                            <CardFooter className='py-5 bg-[#0b1120] text-white rounded-b-sm'>
                                <div className='flex flex-row gap-1 items-center '>
                                    <div className='border-r-2 pr-2 border-gray-300 mr-2'>
                                        <span className='text-3xl font-bold'>#1</span>
                                    </div>
                                    <div className='flex flex-col'></div>
                                </div>
                            </CardFooter>
                        </Card>
                        <Card className='h-[18rem] w-[20rem] rounded-sm overflow-t-visible bg-white shadow-md flex flex-col justify-between'>
                            {/* Top Image */}
                            <div className='h-[60%] w-full flex items-center justify-center bg-white'>
                                <Image
                                    src='/images/home/standings/mercedes-logo.png'
                                    alt='Third position in the constructors championship Mercedes Petronas Formula One team'
                                    width={250}
                                    height={250}
                                    className='object-contain'
                                />
                            </div>

                            {/* Info section */}
                            <CardFooter className='py-5 bg-[#0b1120] text-white rounded-b-sm'>
                                <div className='flex flex-row gap-1 items-center '>
                                    <div className='border-r-2 pr-2 border-gray-300 mr-2'>
                                        <span className='text-3xl font-bold'>#3</span>
                                    </div>
                                    <div className='flex flex-col'></div>
                                </div>
                            </CardFooter>
                        </Card>
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
                                                            <span className='font-bold text-lg w-6 text-center'>
                                                                {i}
                                                            </span>
                                                            <span className='text-lg'>
                                                                Team name
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
                        <Button asChild>
                            <Link href='/standings'>View full standings</Link>
                        </Button>
                    </div>
                </TabsContent>

                {/* @TODO: implement dynamic standings data fetching */}
                <TabsContent value='race'>
                    <div className='[&>*]:text-center'>
                        <h1 className='text-8xl'>Spain</h1>
                        <p className=''>2025</p>
                    </div>

                    <Card className='p-4 max-w-[60rem] mx-auto'>
                        <ul className='gap-0.5'>
                            {[...Array(11)].map((_, index) => {
                                const i = index + 1;
                                return (
                                    <li key={i}>
                                        <Link href='#'>
                                            <Card className='rounded-sm hover:bg-muted'>
                                                <div className='flex h-12 items-center justify-between text-md p-2'>
                                                    <div className='flex p-1 items-center gap-2'>
                                                        <span className='font-bold text-lg w-6 text-center'>
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
                    <div className='flex justify-center mt-8'>
                        <Button asChild>
                            <Link href='/standings'>View full standings</Link>
                        </Button>
                    </div>
                </TabsContent>
            </Tabs>
        </section>
    );
}
