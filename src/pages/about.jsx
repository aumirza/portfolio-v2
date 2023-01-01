import React from "react";
import { Layout } from "../components/Layout";
import { AboutSection } from "../components/sections/AboutSection";

const about = () => {
  return (
    <Layout>
      <AboutSection />
    </Layout>
  );
};

export default about;
export const Head = () => <title>Ahmadullah mirza | About</title>;
