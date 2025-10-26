import { Driver } from '@/types';

import { DriverHeader } from './_components/driver-header';
import { DriverHero } from './_components/hero';

interface DriverProfileProps {
    driver: Driver;
}

export default function DriverProfile({ driver }: DriverProfileProps) {
    return (
        <div className='relative'>
            <DriverHeader />
            <DriverHero driver={driver} />
        </div>
    );
}
