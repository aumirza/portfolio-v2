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
          className="bg-primary hover:bg-white text-white dark:hover:bg-secondary hover:text-primary border-primary border-2 duration-300 dark:text-secondary  py-2 w-full rounded-md ease-in-out transition-all"
        >
          <span className="text-base font-bold">Send</span>
        </button>
      </div>
    </form>
  )
}
