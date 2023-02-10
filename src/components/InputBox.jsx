import React from "react"

export const InputBox = ({ label, name, longInput }) => {
  return (
    <div className="relative my-5">
      <label
        className="absolute -top-3 left-5 text-primary bg-white dark:text-white dark:bg-secondary"
        htmlFor="name"
      >
        {label}
      </label>

      {longInput ? (
        <textarea
          name={name}
          id={name}
          cols="35"
          rows="7"
          className="border border-primary dark:bg-secondary bg-white  rounded-md w-full p-2 outline-none focus:border-white"
        />
      ) : (
        <input
          type="text"
          name={name}
          id={name}
          className="border border-primary dark:bg-secondary bg-white  rounded-md w-full p-2 outline-none focus:border-white"
        />
      )}
    </div>
  )
}
