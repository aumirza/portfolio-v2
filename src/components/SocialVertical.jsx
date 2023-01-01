import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export const SocialVertical = () => {
  return (
    <div className="px-5">
      <FaGithub className="text-3xl text-primary my-3" />
      <FaLinkedin className="text-3xl text-primary my-3" />
      <FaTwitter className="text-3xl text-primary my-3" />
    </div>
  );
};
