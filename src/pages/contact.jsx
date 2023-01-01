import React from "react";
import { ContactDetails } from "../components/ContactDetails";
import { FullSection } from "../components/FullSection";
import { Layout } from "../components/Layout";

const contact = () => {
  return (
    <Layout>
      <FullSection>
        <div className="flex justify-center my-10">
          <h1 className="text-4xl">Contact</h1>
        </div>
        <div className="flex shadow p-5">
          <div className="">
            <div className="">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                className="border border-primary rounded-md w-full p-2"
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="border border-primary rounded-md w-full p-2"
              />
            </div>

            <div>
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                className="border border-primary rounded-md w-full p-2"
              ></textarea>
            </div>

            <div>
              <button className="border border-primary text-primary py-0.5 px-3 rounded-md">
                <span className="text-base">Send</span>
              </button>
            </div>
          </div>
          <div className="ml-10 px-5">
            <ContactDetails />
          </div>
        </div>
      </FullSection>
    </Layout>
  );
};

export default contact;
export const Head = () => <title>Ahmadullah mirza | Contact</title>;
