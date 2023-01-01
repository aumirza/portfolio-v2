import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GoLocation } from "react-icons/go";

export const ContactDetails = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="mb-5 text-2xl font-bold">Contact Info</h1>

      <div className="">
        <div className="flex my-3">
          <AiOutlineMail className="text-primary text-2xl mr-2" />
          <p className="text-lg">
            <a href="mailto:" className="text-primary">
              mail@mail.com
            </a>
          </p>
        </div>

        <div className="flex my-3">
          <BsFillTelephoneFill className="text-primary text-2xl mr-2" />
          <p className="text-lg">
            <a href="tel:" className="text-primary">
              +123456789
            </a>
          </p>
        </div>

        <div className="flex my-3">
          <GoLocation className="text-primary text-2xl mr-2" />
          <p className="text-lg">
            <a
              href="https://goo.gl/maps/8Q5Z9Z9Z9Z9Z9Z9Z9"
              className="text-primary"
            >
              1234 Street, City, State, Country
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
