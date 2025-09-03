import type { Metadata } from "next";
import "./globals.css";
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: "facebook-ihbhuiyan28",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`container mx-auto antialiased`}
      >
        <Navbar />
        <main className={`min-h-screen`}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
