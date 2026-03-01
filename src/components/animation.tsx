import { InView } from '@/components/ui/in-view';

export function InViewAnimation({
    children,
    className
}: Readonly<{
    children: React.ReactNode;
    className?: string;
}>) {
    return (
        <InView
            variants={{
                hidden: { opacity: 0, y: 100, filter: 'blur(4px)' },
                visible: { opacity: 1, y: 0, filter: 'blur(0px)' }
            }}
            viewOptions={{ margin: '0px 0px -200px 0px' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}>
            <div className={className}>{children}</div>
        </InView>
    );
}
