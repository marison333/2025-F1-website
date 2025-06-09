import '../styles/hero.css';

export default function Hero() {
    return (
        <section data-slot='hero'>
            <div className='h-[50rem] flex bg-cyan-300'>
                <div className='flex flex-col justify-end '>
                    <span className='hero-subheading'>Your ultimate destination for F1 data</span>
                    <h1 className='hero-heading'>formule 1 vaulted</h1>
                </div>
            </div>
        </section>
    );
}
