import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import {
    Dialog,
    DialogContent,
    DialogClose,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';

export default function Feedback() {
    return (
        <section className='sm:size-fit md:w-full' data-slot='feedback'>
            <Card className='size-full py-4 bg-amber-600'>
                <CardContent className='h-full flex items-end'>
                    <div className='text-white'>
                        <h1 className='uppercase text-4xl'>help shape the f1 vaulted website</h1>
                        <p>Take a minute to tell us what you think.</p>
                    </div>
                </CardContent>
                <CardFooter>
                    <Dialog>
                        <form>
                            <DialogTrigger asChild>
                                <Button variant='outline'>Open Dialog</Button>
                            </DialogTrigger>
                            <DialogContent className='sm:max-w-[425px]'>
                                <DialogHeader>
                                    <DialogTitle>Give your feedback</DialogTitle>
                                    <DialogDescription>
                                        We appreciate your feedback! Please let us know how we can
                                        improve your experience.
                                    </DialogDescription>
                                </DialogHeader>
                                <div className='grid gap-4'>
                                    <div className='grid gap-3'>
                                        <Textarea
                                            className='resize-none h-32'
                                            placeholder='enter your feedback here'
                                        />
                                    </div>
                                </div>
                                <DialogFooter>
                                    <DialogClose asChild>
                                        <Button variant='outline'>Cancel</Button>
                                    </DialogClose>
                                    <Button className='capitalize' type='submit'>
                                        send feedback
                                    </Button>
                                </DialogFooter>
                            </DialogContent>
                        </form>
                    </Dialog>
                </CardFooter>
            </Card>
        </section>
    );
}
