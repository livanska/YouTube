import Header from "./Header/Header";

import { Sidebar } from "./Sidebar/Sidebar";
import css from "./Layout.module.scss";
import React, { useState } from "react";

interface LayoutProps {
  children?: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className={css.page}>
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <Header setIsOpenSidebar={setIsSidebarOpen} />
      <main className={css.page__content}>{children}</main>
    </div>
  );
};

export default Layout;
