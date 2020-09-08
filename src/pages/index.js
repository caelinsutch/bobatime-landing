import React from "react";
import Hero from "../sections/Hero";
import Reviews from "../sections/Reviews";
import CTA from "../sections/CTA";

import PageWrapper from "../components/PageWrapper";

const LandingPage6 = () => {
  return (
    <>
      <PageWrapper>
        <Hero />
        <Reviews />
        <CTA />
      </PageWrapper>
    </>
  );
};
export default LandingPage6;
