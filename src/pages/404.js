import { Link } from "gatsby"
import React from "react"
import { Seo } from "../components/Seo"

const NotFoundPage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold">Not found</h1>
      <p>Sorry, the page you were looking for doesn't exist.</p>

      <Link to="/" className="bg-primary hover:bg-opacity-90 text-white font-bold py-2 px-4 rounded mt-4">Home</Link>
    </div>
  )
}

export default NotFoundPage

export const Head = () => <Seo title="Not found" />
