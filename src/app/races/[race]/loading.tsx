import { Skeleton } from '@/components/ui/skeleton';

export default function RaceLoadingPage() {
    return (
        <section className='w-full flex flex-col gap-6 md:gap-8'>
            <Skeleton className='w-full min-h-[30rem] md:min-h-[35rem] rounded-[0.4rem]' />
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                <Skeleton className='w-full h-[15.625rem] lg:col-span-2 rounded-[0.4rem]' />
                <Skeleton className='w-full h-[15.625rem] rounded-[0.4rem]' />
            </div>
        </section>
    );
}
