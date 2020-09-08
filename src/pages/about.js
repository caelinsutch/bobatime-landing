import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/common/Hero";
import Content from "../sections/about/Content";
import CTA from "../sections/about/CTA";

const About = () => {
  return (
    <>
      <PageWrapper>
        <Hero title="About us">
          Boba is more than just the drink, it's the people and experiences that make it our favorite drink. The bobatime team is committed to connecting people and energizing their lives with boba
        </Hero>
        <Content />
        <CTA />
      </PageWrapper>
    </>
  );
};
export default About;
