export default function DriversPageLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <div className='my-6 mx-auto max-w-[90rem]'>{children}</div>;
}
