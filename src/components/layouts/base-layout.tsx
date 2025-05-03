export default function BaseLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <div className='max-w-[90rem] lg:mx-auto'>{children}</div>;
}
