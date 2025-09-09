export default function BaseLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className='min-h-screen max-w-[90rem] w-full py-6 [&>*]:px-1.5 [&>*]:md:px-0 mx-auto'>
            {children}
        </main>
    );
}
