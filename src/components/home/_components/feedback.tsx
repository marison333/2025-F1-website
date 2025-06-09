import { Button } from '@/components/ui/button';

export default function Feedback() {
    return (
        <section className='container'>
            <div className='px-4 mb-10'>
                <div className='mb-4'>
                    <h2 className='font-bold text-4xl mb-2'>Feedback</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis molestias
                        doloremque voluptatum nemo recusandae at quibusdam quae vitae vero ducimus,
                        eius quia itaque facilis odio non dolorum atque sapiente nulla?
                    </p>
                </div>
                <div>
                    <Button asChild>
                        <a href='#'>Write your feedback</a>
                    </Button>
                </div>
            </div>
        </section>
    );
}
