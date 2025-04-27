export default function BaseLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <div className='max-w-7xl px-3.5 mx-auto'>{children}</div>;
}
