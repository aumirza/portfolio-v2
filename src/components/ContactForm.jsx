import React from "react"
import { InputBox } from "./InputBox"

export const ContactForm = () => {
  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      content-type="application/x-www-form-urlencoded"
      action="/contact/success"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact" />
      <InputBox label="Name" name="name" />
      <InputBox label="Email" name="email" />
      <InputBox label="Message" name="message" longInput />

      <div>
        <button
          type="submit"
          className="w-full py-2 transition-all duration-300 ease-in-out border-2 rounded-md bg-primary hover:bg-white dark:hover:bg-secondary hover:text-primary border-primary text-secondary"
        >
          <span className="text-base font-bold">Send</span>
        </button>
      </div>
    </form>
  )
}
