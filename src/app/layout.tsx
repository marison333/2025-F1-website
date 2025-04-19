import type { Metadata } from "next";
import "./globals.css";

import BaseLayout from "@/components/layouts/base-layout";

export const metadata: Metadata = {
  title: "F1 Tracker",
  description: "Track your favorite Formula 1 stats",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-nl">
      <body>
        <BaseLayout>{children}</BaseLayout>
      </body>
    </html>
  );
}
