import { Driver } from '@/types';

import { FlagIconWithText } from '@/components/flag';
import { Separator } from '@/components/ui/separator';
import { getTeamVariable } from '@/utils/team-colors';

interface DriverProfileProps {
    driver: Driver;
}

export const DriverHero = ({ driver }: DriverProfileProps) => {
    const team = driver.team.id.replace(/\s+/g, '-').toLowerCase();

    return (
        <div className='w-full h-screen' data-slot='driver-profile-hero'>
            {/* @TODO: 
        1. find a hand written font for the `givenName`
        2. add dynamically add team colors as gradient background
        3. add mask image to the background
        4. add driver mugshot in the middle and fade out at the bottom

        (Look at https://www.formula1.com/en/drivers/oscar-piastri for reference)
         */}
            <div className='relative h-[] w-full flex flex-col items-center justify-end gap-2'>
                <div className='flex flex-col items-center justify-center'>
                    <span className='text-3xl'>{driver.givenName}</span>
                    <span className='text-4xl'>{driver.familyName}</span>
                </div>
                <div className='flex flex-row gap-2'>
                    <FlagIconWithText
                        name={driver.nationality.name}
                        iconUrl={driver.nationality.code}
                    />
                    <Separator orientation='vertical' className='' />
                    <span className='capitalize'>{team}</span>
                    <Separator orientation='vertical' />
                    <span>#{driver.permanentNumber}</span>
                </div>
            </div>
        </div>
    );
};
