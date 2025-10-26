import { LayoutTypes } from '@/lib/layouts';

export default function BaseLayout({
    children,
    layout = LayoutTypes.default
}: Readonly<{
    children: React.ReactNode;
    layout?: (typeof LayoutTypes)[keyof typeof LayoutTypes];
}>) {
    return (
        <main className='[&>*]:px-1.5 [&>*]:xl:px-0' data-layout={layout}>
            {children}
        </main>
    );
}
