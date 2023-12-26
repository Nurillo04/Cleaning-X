import React from "react";
import {
  AboutUs,
  Articles,
  Contact,
  Covid,
  Footer,
  Header,
  Hero,
  Services,
} from "../../components";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <AboutUs />
      <Services />
      <Covid />
      <Articles />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
