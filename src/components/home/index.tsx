import BentoGrid from './_components/bento-grid';
import Feedback from './_components/feedback';
import Hero from './_components/hero';
import Message from './_components/driver-results';
import Standings from './_components/standings';

export default function Home() {
    return (
        <>
            <Hero />
            <BentoGrid />
            <Message />
            <Standings />
            <Feedback />
        </>
    );
}
