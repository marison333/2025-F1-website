import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export default function Home() {
    return (
        <div className='w-full h-[30rem] flex gap-2'>
            <Card className='max-w-3xl flex-1'>
                <CardContent>
                    <h1 className='text-6xl font-bold'>Welcome to Formule 1 Tracker</h1>
                    <p className='mt-2 text-lg'>Track your favorite Formula 1 stats, drivers, teams and Seasons</p>
                </CardContent>
            </Card>

            <div className='grid grid-cols-2 grid-rows-7 gap-2 max-w-3xl flex-1'>
                <Card className='col-span-2 py-0'>
                    <CardContent>
                        <h3 className='font-bold text-4xl text-center'>Track any</h3>
                    </CardContent>
                </Card>
                <Card className='row-span-4'>
                    <Link className='block w-full h-full' href='/drivers'>
                        <span className='text-center text-2xl font-bold'>Driver</span>
                    </Link>
                </Card>
                <Card className='row-span-2'>
                    <Link className='block w-full h-full' href='/teams'>
                        <span className='text-center text-2xl font-bold'>Team</span>
                    </Link>
                </Card>
                <Card className='row-span-2'>
                    <Link className='block w-full h-full' href='/seasons'>
                        <span className='text-center text-2xl font-bold'>Season</span>
                    </Link>
                </Card>
                <Card className='row-span-2'>
                    <Link className='block w-full h-full' href='/circuits'>
                        <span className='text-center text-2xl font-bold'>Circuit</span>
                    </Link>
                </Card>
                <Card className='row-span-2'>
                    <Link className='block w-full h-full' href='/stats'>
                        <span className='text-center text-2xl font-bold'>Other Statistics</span>
                    </Link>
                </Card>
            </div>
        </div>
    );
}
