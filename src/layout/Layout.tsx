import Header from "./Header";
import Footer from "./Footer";
import React, { PropsWithChildren } from "react";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="min-h-[calc(100dvh-7rem)] py-4 px-16 flex justify-center items-center">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;