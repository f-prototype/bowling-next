import Header from '@/components/header/Header';
import './globals.css';
import { Inter, Mulish, Ubuntu } from 'next/font/google';
import Footer from '@/components/footer/Footer';

const ubuntu = Ubuntu({ weight: '400', subsets: ['cyrillic'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        <div className="App">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
