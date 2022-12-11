import React from "react";
import Head from "next/head";
import Freelancers from "../Components/Freelancers/Freelancers";
import Services from "../Components/Services/Services";
import TrendingServices from "../Components/TrendingServices/TrendingServices";
import About from "../Components/About/About";
import Nav from "../Components/Nav/Nav";
import AppDownload from "../Components/AppDownload/AppDownload";
import Footer from "../Components/Footer/Footer";
import Hero from "../Components/Herosec/Hero";
import Leads from "../Components/Leads/Leads";
import NavBar from "../Components/Nav/NavBar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Canada Freelancer</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <header>
        {/* <Nav /> */}
        <NavBar />
        <Hero />
      </header>
      <main>
        <Services />
        <Leads />
        <About />
        <TrendingServices />
        <Freelancers />
        <AppDownload />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
