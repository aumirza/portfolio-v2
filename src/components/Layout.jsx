import React from "react"
import { Footer } from "./layouts/Footer"
import { Header } from "./layouts/Header"

export const Layout = ({ children, className }) => {
  return (
    <div className="dark:bg-secondary dark:text-white ">
      <Header />
      <main className={className}>{children}</main>
      <Footer />
    </div>
  )
}
