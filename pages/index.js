import dynamic from "next/dynamic";
import { useEffect } from "react";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Copyright from "../src/components/Copyright";
import CounterSection from "../src/components/CounterSection";
import Education from "../src/components/Education";
import Partners from "../src/components/Partners";
import Portfolio from "../src/components/Portfolio";
import Process from "../src/components/Process";
import Service from "../src/components/Service";
import Skills from "../src/components/Skills";
import Head from "next/head";
import Header from "../src/layouts/Header";
import Layout from "../src/layouts/Layout";
import MobileHeader from "../src/layouts/MobileHeader";
import Mouse from "../src/layouts/Mouse";
import ScrollTop from "../src/layouts/ScrollTop";
import Home from "../src/components/Home";


const IndexDark = () => {
  useEffect(() => {
    document.querySelector("body").classList.add("dark");
  }, []);

  return (
    <Layout>
      <Head>
        <title>Dev.Dulaj | Home</title>
        <link rel="icon" href="img/favicon.ico" type="image/x-icon" />
      </Head>
      <MobileHeader />
      <Header />
      <Home />
      <About />
      <CounterSection />
      <Education />
      <Portfolio />
      <Process />
      <Skills />
      <Partners dark />
      <Service />
      <Contact />
      <Copyright />
      <Mouse />
      <ScrollTop />
    </Layout>
  );
};
export default IndexDark;
