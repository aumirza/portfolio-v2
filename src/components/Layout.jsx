import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout = ({ children, className }) => {
  return (
    <div className="dark:bg-secondary dark:text-white">
      <Header />
      <main className={className}>{children}</main>
      <Footer />
    </div>
  );
};
