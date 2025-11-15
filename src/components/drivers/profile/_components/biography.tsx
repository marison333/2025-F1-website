import Image from 'next/image';

import { Driver } from '@/types';
import { driverParagraph } from '@/mock/paragraphs';

interface DriverBiographyProps {
    driver: Driver;
}

export const DriverBiography = ({ driver }: DriverBiographyProps) => {
    return (
        <section className='py-16 px-4 xl:px-0' id='biography'>
            <div className='mb-12 capitalize'>
                <h2>
                    <span className='text-5xl'>Biography</span>
                </h2>
            </div>
            <div className='h-16 *:w-full md:w-1/4 mb-8 grid grid-cols-2 justify-start'>
                <div className='flex flex-col gap-0'>
                    <span className='text-gray-600'>Date of Birth</span>
                    <span className='font-bold text-xl'>{driver.dateOfBirth}</span>
                </div>
                <div className='flex flex-col gap-0'>
                    <span className='text-gray-600'>Place of Birth</span>
                    <span className='font-bold text-xl'>{driver.placeOfBirth}</span>
                </div>
            </div>

            <div>
                <div className='*:w-full *:md:w-1/2 flex flex-col md:flex-row items-center justify-between'>
                    <div className='w-3/5 mb-8 md:mb-0 md:w-1/3 flex items-center justify-around'>
                        <div
                            className='w-full md:w-3/4 p-4 md:p-0 flex items-center justify-center rounded-md'
                            style={{
                                background:
                                    'repeating-linear-gradient(45deg, #e0e0e0, #e0e0e0 10px, #ffffff 10px, #ffffff 20px)'
                            }}>
                            <Image
                                className='relative top-2 h-auto object-contain'
                                alt={`full picture of ${driver.givenName} ${driver.familyName}`}
                                src={driver.mugshotUrl}
                                height={200}
                                width={200}
                            />
                        </div>
                        <div className='hidden lg:block' />
                    </div>
                    <div>
                        {driverParagraph.map((paragraph, index) => (
                            <p key={index} className='mb-4 md:text-xl leading-7'>
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
