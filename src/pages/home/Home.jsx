import React from "react";
import {
  AboutUs,
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
      <Footer />
    </>
  );
};

export default Home;
