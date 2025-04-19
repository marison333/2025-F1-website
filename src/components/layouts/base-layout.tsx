import Navigation from "../navigation";

export default function BaseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <>
          <Navigation />
          <div className='min-h-screen max-w-7xl px-3.5 mx-auto'>{children}</div>
      </>
  );
}