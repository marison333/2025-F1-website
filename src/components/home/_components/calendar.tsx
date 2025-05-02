import Image from 'next/image';

import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

interface Artwork {
    art: string;
    artist: string;
}

export const works: Artwork[] = [
    {
        artist: 'Ornella Binni',
        art: 'https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80'
    },
    {
        artist: 'Tom Byrom',
        art: 'https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80'
    },
    {
        artist: 'Kenny Leys',
        art: 'https://images.unsplash.com/photo-1610905376670-5e7e0e8a3cfb?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        artist: 'Filipp Romanovski',
        art: 'https://images.unsplash.com/photo-1613732764162-251c03439b53?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        artist: 'Dulant Pang',
        art: 'https://images.unsplash.com/photo-1722982980456-a22ba2c01bc8?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        artist: 'Brecht Denil',
        art: 'https://images.unsplash.com/photo-1728287909016-2e6eb5bc98a7?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
];

export default function MiniCalendar() {
    return (
        <div className='container mx-auto'>
            <section>
                <ScrollArea className='w-full mb-8 whitespace-nowrap border'>
                    <div className='flex w-max space-x-4 p-4'>
                        {works.map((artwork) => (
                            <figure key={artwork.artist} className='shrink-0'>
                                <div>
                                    {/* country flag */}
                                    <Image
                                        alt={`Photo by ${artwork.artist}`}
                                        className=''
                                        height={400}
                                        src={artwork.art}
                                        width={300}
                                    />
                                </div>
                                <figcaption>
                                    <span>{artwork.artist}</span>
                                </figcaption>
                            </figure>
                        ))}
                    </div>
                    <ScrollBar orientation='horizontal' />
                </ScrollArea>
            </section>
        </div>
    );
}
