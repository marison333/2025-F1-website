import Image from 'next/image';

import { Driver } from '@/types';
import { getTeamGradientClass, getTeamGradientDarkClass } from '@/utils/team-colors';
import { Separator } from '@/components/ui/separator';
import { FlagIconWithText } from '@/components/flag';

interface DriverProfileProps {
    driver: Driver;
}

export const DriverHero = ({ driver }: DriverProfileProps) => {
    const teamColorDark = (teamId: string) => {
        return `var(--color-${teamId}-dark)`;
    };

    const teamDisplayName = driver.team.id.replace(/-/g, ' ');

    return (
        <div className='relative left-2/4 w-[100vw] mx-[-50vw] md:mx-[-50vw] lg:mx-[-52.855vw] xl:mx-[-52vw]'>
            <div className='w-full mx-0 md:mx-8'>
                <div
                    className={`relative w-full overflow-clip h-[678px] md:h-[483px] lg:h-[563px] max-w-[1696px] m-auto flex flex-col bg-gradient-to-l ${getTeamGradientClass(driver.team.id)} ${getTeamGradientDarkClass(driver.team.id)}`}>
                    <div className={`hidden md:block absolute inset-0`} />
                    <div className='hidden md:flex size-full flex-row absolute top-0 bottom-0 left-2/4 -translate-x-2/4 full'>
                        <div>
                            <span
                                className='block aspect-[.7902621723] rotate-180'
                                style={{
                                    backgroundColor: teamColorDark(driver.team.id),
                                    height: '100%',
                                    maskImage: 'url(/images/drivers/profile-background.webp)',
                                    maskPosition: 'center',
                                    maskRepeat: 'no-repeat',
                                    maskSize: 'contain',
                                    opacity: 0.4,
                                    WebkitMaskImage: 'url(/images/drivers/profile-background.webp)',
                                    WebkitMaskPosition: 'center',
                                    WebkitMaskRepeat: 'no-repeat',
                                    WebkitMaskSize: 'contain'
                                }}
                            />
                        </div>
                        <div className='-ml-[45px] lg:ml-0'>
                            <span
                                className='block aspect-[.7902621723]'
                                style={{
                                    backgroundColor: teamColorDark(driver.team.id),
                                    height: '100%',
                                    maskImage: 'url(/images/drivers/profile-background.webp)',
                                    maskPosition: 'center',
                                    maskRepeat: 'no-repeat',
                                    maskSize: 'contain',
                                    opacity: 0.3,
                                    WebkitMaskImage: 'url(/images/drivers/profile-background.webp)',
                                    WebkitMaskPosition: 'center',
                                    WebkitMaskRepeat: 'no-repeat',
                                    WebkitMaskSize: 'contain'
                                }}
                            />
                        </div>
                        <div className='-ml-[45px] lg:ml-0'>
                            <span
                                className='block aspect-[.7902621723]'
                                style={{
                                    backgroundColor: teamColorDark(driver.team.id),
                                    height: '100%',
                                    maskImage: 'url(/images/drivers/profile-background.webp)',
                                    maskPosition: 'center',
                                    maskRepeat: 'no-repeat',
                                    maskSize: 'contain',
                                    opacity: 0.3,
                                    WebkitMaskImage: 'url(/images/drivers/profile-background.webp)',
                                    WebkitMaskPosition: 'center',
                                    WebkitMaskRepeat: 'no-repeat',
                                    WebkitMaskSize: 'contain'
                                }}
                            />
                        </div>
                        <div className='-ml-[45px] lg:ml-0'>
                            <span
                                className='block aspect-[.7902621723]'
                                style={{
                                    backgroundColor: teamColorDark(driver.team.id),
                                    height: '100%',
                                    maskImage: 'url(/images/drivers/profile-background.webp)',
                                    maskPosition: 'center',
                                    maskRepeat: 'no-repeat',
                                    maskSize: 'contain',
                                    opacity: 0.4,
                                    WebkitMaskImage: 'url(/images/drivers/profile-background.webp)',
                                    WebkitMaskPosition: 'center',
                                    WebkitMaskRepeat: 'no-repeat',
                                    WebkitMaskSize: 'contain'
                                }}
                            />
                        </div>
                    </div>

                    <div className='md:hidden absolute bottom-2/4 left-2/4 -translate-x-2/4 size-full flex flex-col'>
                        <div className='w-[734px]'>
                            <span
                                className='block aspect-[1.2654028436] w-full'
                                style={{
                                    backgroundColor: teamColorDark(driver.team.id),
                                    height: '100%',
                                    maskImage: 'url(/images/drivers/profile-background-sm.webp)',
                                    maskPosition: 'center',
                                    maskRepeat: 'no-repeat',
                                    maskSize: 'contain',
                                    opacity: 0.4,
                                    WebkitMaskImage:
                                        'url(/images/drivers/profile-background-sm.webp)',
                                    WebkitMaskPosition: 'center',
                                    WebkitMaskRepeat: 'no-repeat',
                                    WebkitMaskSize: 'contain'
                                }}
                            />
                        </div>
                    </div>

                    <div className='absolute top-3 md:top-0 bottom-0 right-0 w-full md:w-1/2 flex justify-center'>
                        {/* @TODO: create mock data or download from formula1.com all mask image driver nuber */}
                        {/* <div
                            className='w-full h-[342px] md:h-[291px] lg:h-[371px] mx-auto md:my-auto mt-[16px] md:mt-auto'
                            style={{
                                maskImage: 'url(/images/drivers/profile-background-sm.webp)',
                                maskPosition: 'center',
                                maskRepeat: 'no-repeat',
                                maskSize: 'contain'
                            }}
                        /> */}
                        <Image
                            alt={`2025 photo of ${driver.givenName} ${driver.familyName}`}
                            className='absolute md:pt-16 w-[222px] md:w-[305px] lg:w-[355px]'
                            height={1000}
                            priority={true}
                            quality={100}
                            src={driver.mugshotUrl}
                            width={1000}
                        />
                    </div>

                    <div
                        className={`block md:hidden absolute left-0 right-0 bottom-0 h-[430px] bg-gradient-to-t ${getTeamGradientClass(driver.team.id)} from-65% to-transparent to-90%`}
                    />
                    <div className='flex flex-col md:hidden absolute top-2/4 left-2/4 -translate-x-2/4'>
                        <div className='w-[734px]'>
                            <span
                                className='rotate-180 aspect-[1.2654028436] h-auto w-full'
                                style={{
                                    height: '100%',
                                    maskImage: 'url(/images/drivers/profile-background.webp)',
                                    maskPosition: 'center',
                                    maskRepeat: 'no-repeat',
                                    maskSize: 'contain',
                                    opacity: 0.3,
                                    WebkitMaskImage: 'url(/images/drivers/profile-background.webp)',
                                    WebkitMaskPosition: 'center',
                                    WebkitMaskRepeat: 'no-repeat',
                                    WebkitMaskSize: 'contain'
                                }}
                            />
                        </div>
                    </div>

                    <div className='relative h-full md:mr-[50%] flex-grow flex flex-col gap-px-32 justify-between items-center'>
                        {/* decorative line */}
                        <div className='relative w-[36px] h-[90px] md:h-[120px] lg:h-[144px]'></div>

                        <div className='grow flex flex-col justify-end md:justify-around gap-px-16 text-white'>
                            {/* @TODO: add driver info here */}
                            <div className='flex flex-col gap-px-12 items-center justify-center'>
                                <h1 className='flex flex-col items-center text-center'>
                                    <span className='-mb-px-8'>{driver.givenName}</span>
                                    <span className='text-7xl'>{driver.familyName}</span>
                                </h1>
                                <div className='flex gap-2 items-center justify-center'>
                                    <FlagIconWithText
                                        name={driver.nationality.name}
                                        iconUrl={driver.nationality.code}
                                    />
                                    <div className='h-full md:h-3/4'>
                                        <Separator orientation='vertical' />
                                    </div>
                                    <span className='capitalize'>{teamDisplayName}</span>
                                    <div className='h-full md:h-3/4'>
                                        <Separator orientation='vertical' />
                                    </div>
                                    <span>{driver.permanentNumber}</span>
                                </div>
                            </div>
                        </div>

                        {/* decorative line */}
                        <div className='relative w-[36px] h-[90px] md:h-[120px] lg:h-[144px]'></div>
                    </div>
                </div>
            </div>
        </div>
    );
};
