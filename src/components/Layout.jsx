import React from "react"

import { Footer } from "./layouts/Footer"
import { Header } from "./layouts/Header"
import SnowFall from "./SnowFall"

export const Layout = ({ children, className }) => {
  return (
    <div className="dark:bg-secondary dark:text-white ">
      <SnowFall />
      <Header />
      <main className={className}>{children}</main>
      <Footer />
    </div>
  )
}
