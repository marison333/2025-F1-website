import { getDrivers } from '@/lib/data/drivers';
import { getDriverStandings } from '@/lib/data/driver-standings';
import { getTeamStandings } from '@/lib/data/teams-standings';

import { DriverCarousel } from './_components/driver-carousel';
import BentoGrid from './_components/bento-grid';
import Feedback from './_components/feedback';
import Hero from './_components/hero';
import Standings from './_components/standings';

export default async function Home() {
    const data = {
        drivers: await getDrivers(),
        driverStandings: await getDriverStandings(),
        teamStandings: await getTeamStandings()
    };

    return (
        <>
            <Hero />
            <BentoGrid />
            <DriverCarousel drivers={data.drivers} />
            <Standings drivers={data.driverStandings} teams={data.teamStandings} />
            <Feedback />
        </>
    );
}
