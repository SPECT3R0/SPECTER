import { ReactNode } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="bg-background-dark text-white min-h-screen">
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;