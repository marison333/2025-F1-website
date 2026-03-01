import Link from 'next/link';
import Image from 'next/image';

import { GrandPrix } from '@/types';
import { Button } from '@/components/ui/button';
import { FlagIcon } from '@/components/flag';
import { Card } from '@/components/ui/card';
import formatDateRange from '@/utils/date-formatter';
import { raceIdToSlug } from '@/lib/race-slug';
import { RaceResultRow } from '@/lib/data/race-results';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

interface RaceProfileProps {
    hasRaceHappened: boolean;
    race: GrandPrix;
    results: RaceResultRow[];
    nextRace: GrandPrix | null;
    previousRace: GrandPrix | null;
}

export default function RaceProfile({
    hasRaceHappened,
    race,
    results,
    previousRace,
    nextRace
}: RaceProfileProps) {
    const raceTitle = race.id.replace(/-/g, ' ').replace(/\sgp$/i, '');

    return (
        <article className='w-full flex flex-col gap-6 md:gap-8'>
            <section className='relative min-h-[30rem] md:min-h-[35rem] rounded-[0.4rem] overflow-hidden text-white'>
                <Image
                    alt={`Hero image for ${race.name}`}
                    className='absolute inset-0 size-full object-cover'
                    fill
                    priority
                    src={race.imageUrl || '/images/drivers/background.webp'}
                />

                <div className='absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/25' />

                <div className='relative z-10 h-full p-5 md:p-8 lg:p-12 flex flex-col justify-between gap-8'>
                    <div className='flex items-start justify-between gap-3'>
                        <Button asChild className='text-black' size='sm' variant='outline'>
                            <Link href='/schedule'>Back to schedule</Link>
                        </Button>
                        <span className='uppercase text-xs font-semibold tracking-wide'>
                            2025 season
                        </span>
                    </div>

                    <div className='max-w-4xl flex flex-col gap-3'>
                        <span className='uppercase text-sm font-semibold tracking-wide text-white/80'>
                            Race weekend
                        </span>
                        <h1 className='capitalize text-4xl md:text-6xl font-black leading-[0.95]'>
                            {raceTitle}
                        </h1>
                        <p className='uppercase text-sm md:text-base font-semibold text-white/85'>
                            {race.name}
                        </p>
                    </div>
                </div>
            </section>

            <section className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                <Card className='p-4 lg:col-span-2'>
                    <h2 className='text-lg font-black uppercase'>Event details</h2>
                    <dl className='mt-4 grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div>
                            <dt className='text-xs uppercase text-zinc-500'>Date</dt>
                            <dd className='text-lg font-bold uppercase'>
                                {formatDateRange(race.dateStart, race.dateEnd)}
                            </dd>
                        </div>
                        <div>
                            <dt className='text-xs uppercase text-zinc-500'>Circuit</dt>
                            <dd className='text-lg font-bold'>{race.location.circuit}</dd>
                        </div>
                        <div>
                            <dt className='text-xs uppercase text-zinc-500'>Nation</dt>
                            <dd className='text-lg font-bold'>
                                <FlagIcon
                                    iconUrl={race.location.nationality.code}
                                    name={race.location.nationality.name}
                                />
                            </dd>
                        </div>
                        <div>
                            <dt className='text-xs uppercase text-zinc-500'>Laps</dt>
                            <dd className='text-lg font-bold'>{race.laps ?? 'TBD'}</dd>
                        </div>
                    </dl>
                </Card>

                <Card className='p-4'>
                    <h2 className='text-lg font-black uppercase'>Navigation</h2>
                    <div className='mt-4 flex flex-col gap-2'>
                        {previousRace ? (
                            <Button asChild className='justify-start' variant='ghost'>
                                <Link href={`/races/${raceIdToSlug(previousRace.id)}`}>
                                    Previous:{' '}
                                    {previousRace.id.replace(/-/g, ' ').replace(/\sgp$/i, '')}
                                </Link>
                            </Button>
                        ) : (
                            <span className='text-sm text-zinc-500'>No previous race</span>
                        )}

                        {nextRace ? (
                            <Button asChild className='justify-start' variant='ghost'>
                                <Link href={`/races/${raceIdToSlug(nextRace.id)}`}>
                                    Next: {nextRace.id.replace(/-/g, ' ').replace(/\sgp$/i, '')}
                                </Link>
                            </Button>
                        ) : (
                            <span className='text-sm text-zinc-500'>No next race</span>
                        )}
                    </div>
                </Card>
            </section>

            <section>
                {hasRaceHappened ? (
                    <Card className='p-4'>
                        <div className='mb-3 flex items-center justify-between gap-2'>
                            <h2 className='text-lg font-black uppercase'>Race results</h2>
                            <span className='text-xs uppercase font-semibold text-zinc-500'>
                                Official classification
                            </span>
                        </div>
                        <Table>
                            <TableHeader>
                                <TableRow className='*:uppercase *:font-black'>
                                    <TableHead>Pos</TableHead>
                                    <TableHead>Driver</TableHead>
                                    <TableHead>Team</TableHead>
                                    <TableHead>Time / Gap</TableHead>
                                    <TableHead className='text-right'>Pts</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {results.map((result) => (
                                    <TableRow className='*:capitalize' key={result.position}>
                                        <TableCell>{result.position}</TableCell>
                                        <TableCell>{result.driver}</TableCell>
                                        <TableCell>{result.team}</TableCell>
                                        <TableCell className='font-medium'>{result.time}</TableCell>
                                        <TableCell className='text-right'>{result.points}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Card>
                ) : (
                    <Card className='p-6 bg-zinc-900 text-white'>
                        <h2 className='text-xl font-black uppercase'>Race results</h2>
                        <p className='mt-2 mb-0 text-zinc-300'>
                            This Grand Prix has not happened yet. Results will appear here after the
                            race weekend is completed.
                        </p>
                    </Card>
                )}
            </section>
        </article>
    );
}
