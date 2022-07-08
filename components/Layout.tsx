import Head from 'next/head';
import { ReactNode } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';

const titleText = 'Shop';
const descriptionText = 'Some description';
interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>{titleText}</title>
        <meta name="description" content={descriptionText} />
      </Head>
      <Header />
      <div className="flex-grow">{children}</div>
      <Footer />
    </div>
  );
};
