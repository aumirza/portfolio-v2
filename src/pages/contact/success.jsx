import { Link } from "gatsby"
import React from "react"
import { Seo } from "../../components/Seo"

const Success = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold">
        Thank you for your message. I will get back to you as soon as possible.
      </h1>

      <Link
        to="/contact"
        className="bg-primary hover:bg-opacity-90 text-white font-bold py-2 px-4 rounded mt-4"
      >
        Go Back
      </Link>
    </div>
  )
}

export default Success

export const Head = () => <Seo title="Success" />
