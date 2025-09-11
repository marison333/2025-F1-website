import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { useSidebar } from '@/components/ui/sidebar';

export function CustomTrigger() {
    const { toggleSidebar } = useSidebar();

    return (
        <Button onClick={toggleSidebar} variant='ghost' size='icon'>
            <Menu />
            <span className='sr-only'>Toggle Sidebar</span>
        </Button>
    );
}
