import React from "react";
import {
  AboutUs,
  Articles,
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
      <Footer />
    </>
  );
};

export default Home;
