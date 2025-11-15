export default function DriverProfileLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className='relative z-0'>
            {children}
        </div>
    );
}
