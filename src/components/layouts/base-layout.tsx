export default function BaseLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <main className="max-w-[90rem] mx-auto">{children}</main>;
}
