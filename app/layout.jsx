import './globals.css';
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';

const display = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
});

const body = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata = {
  title: 'NovaDent Clinic — Modern Dental Care for a Confident Smile',
  description:
    'NovaDent Clinic — modern dental care for a confident smile. Painless treatment, experienced dentists, and advanced technology.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
