import { DriverCarousel } from './_components/carousels';
import BentoGrid from './_components/bento-grid';
import Feedback from './_components/feedback';
import Hero from './_components/hero';
import Standings from './_components/standings';

export default function Home() {
    return (
        <>
            <Hero />
            <BentoGrid />
            <DriverCarousel />
            <Standings />
            <Feedback />
        </>
    );
}
