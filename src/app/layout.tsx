import type { Metadata } from 'next';
import './styles/globals.css';

import BaseLayout from '@/components/layouts/base-layout';
import Footer from '@/components/footer';
import Navigation from '@/components/navigation';

export const metadata: Metadata = {
    title: {
        template: '%s - F1 stat tracker',
        default: 'F1 stats tracker'
    },
    description:
        'Formule 1 statistic tracker, track your favorite drivers and teams. Get the latest championship standings.',
    keywords:
        'f1, formule 1, statistic tracker, formule 1 statistic tracker, f1 stat tracker, f1 stats, f1 championship standings, f1 drivers, f1 teams, f1 drivers standings, f1 teams standings, f1 drivers championship standings, f1 teams championship standings',
    creator: 'Marison'
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en-nl'>
            <body className='font-saira'>
                <BaseLayout>
                    <Navigation />
                    <main>{children}</main>
                    <Footer />
                </BaseLayout>
            </body>
        </html>
    );
}
