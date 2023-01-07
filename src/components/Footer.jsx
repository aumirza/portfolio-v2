import React from "react"
import { Copyright } from "./Copyright"
import { Social } from "./Social"

export const Footer = () => {
  return (
    <div className="flex flex-col h-48 bg-primary text-secondary items-center justify-center">
      <Social />
      <Copyright />
    </div>
  )
}
