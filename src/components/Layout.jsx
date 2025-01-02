import React from "react"
import Snowfall from "react-snowfall"

import snowflake from "../images/white-snowflake.png"

import { Footer } from "./layouts/Footer"
import { Header } from "./layouts/Header"

const isWinter = [11, 12, 0, 1].includes(new Date().getMonth())

export const Layout = ({ children, className }) => {
  const snowflakeImage = new Image()
  snowflakeImage.src = snowflake
  return (
    <div className="dark:bg-secondary dark:text-white ">
      {isWinter && (
        <Snowfall
          images={[snowflakeImage]}
          snowflakeCount={100}
          radius={[2, 10]}
          style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0 }}
        />
      )}
      <Header />
      <main className={className}>{children}</main>
      <Footer />
    </div>
  )
}
