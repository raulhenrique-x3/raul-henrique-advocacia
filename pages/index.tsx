import type { NextPage } from "next";
import Head from "next/head";
import { Footer } from "../Components/Footer/Footer";
import { Header } from "../Components/Header/Header";
import { SectionFive } from "../Components/SectionFive/SectionFive";
import { SectionFour } from "../Components/SectionFour/SectionFour";
import { SectionOne } from "../Components/SectionOne/SectionOne";
import { SectionSix } from "../Components/SectionSix/SectionSix";
import { SectionThree } from "../Components/SectionThree/SectionThree";
import { SectionTwo } from "../Components/SectionTwo/SectionTwo";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Henrique Advocacia</title>
        <meta name="description" content="A academia mais barata da região de Cavaleiro!" />
        <meta name="google-site-verification" content="xRK8Fmlx2OrV0hN-K7k9lpxVBnamDLzWrUUXu0wPNxQ" />
      </Head>
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <Footer />
    </>
  );
};

export default Home;
