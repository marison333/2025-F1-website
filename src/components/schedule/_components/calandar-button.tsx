import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

export const CalendarButton = () => {
    return (
        <Button className='rounded-full bg-amber-600' size='lg'>
            <Calendar />
            Add F1 calendar
        </Button>
    );
};
