import { headers } from 'next/headers';
import { LayoutTypes } from '@/lib/layouts';

export default async function BaseLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    const headersList = await headers();
    const pathname = headersList.get('x-invoke-path') || headersList.get('x-pathname') || '/';

    const layout = getLayoutForPath(pathname);
    console.log('BaseLayout pathname:', pathname, 'layout:', layout); // Debug log

    return (
        <main className='[&>*]:px-1.5 [&>*]:xl:px-0' data-layout={layout}>
            {children}
        </main>
    );
}

function getLayoutForPath(pathname: string): string {
    if (pathname.startsWith('/drivers')) return LayoutTypes.profile;
    if (pathname.startsWith('/teams/')) return LayoutTypes.profile;
    return LayoutTypes.default;
}
