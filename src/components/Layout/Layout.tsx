import { Header } from "./Header";
import Footer from "./Footer";
import OpenSourceBanner from "../OpenSourceBanner";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex flex-col min-h-screen font-body bg-background overflow-x-hidden">
      <OpenSourceBanner />
      <Header />

      <main className="flex-1 py-24 px-4">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
