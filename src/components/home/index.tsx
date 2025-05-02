import Feedback from './_components/feedback';
import Hero from './_components/hero';
import Message from './_components/message';
import MiniCalendar from './_components/calendar';
import Standings from './_components/standings';

export default function Home() {
    return (
        <>
            <Hero />
            <Message />
            <MiniCalendar />
            <Standings />
            <Feedback />
        </>
    );
}
