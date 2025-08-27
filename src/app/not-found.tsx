import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
    return (
        <div className='h-screen flex flex-col items-center justify-center gap-0.5' data-slot='not-found'>
            <Image
                src='/images/not-found.gif'
                alt='Not Found'
                width={300}
                height={300}
                className='object-contain rounded-[0.3rem]'
            />
            <h2 className='text-5xl font-bold uppercase'>not found</h2>
            <p className='text-xl'>Could not find requested resource</p>
            <Button asChild>
                <Link href='/' className='capitalize'>go home</Link>
            </Button>
        </div>
    );
}
