import React from "react"

export const ContactForm = () => {
  return (
    <form name="contact" method="POST" netlify>
      <div className="">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          className="border border-secondary dark:border-primary  rounded-md w-full p-2"
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          className="border border-secondary dark:border-primary  rounded-md w-full p-2"
        />
      </div>

      <div>
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="8"
          className="border border-secondary dark:border-primary  rounded-md w-full p-2"
        ></textarea>
      </div>

      <div>
        <button
          type="submit"
          className="border border-secondary dark:border-primary  py-0.5 px-3 rounded-md"
        >
          <span className="text-base">Send</span>
        </button>
      </div>
    </form>
  )
}
