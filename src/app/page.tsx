import Image from "next/image";
import Navbar from "../components/Navbar";
import YoutubeVideo from "../components/YoutubeVideo";
import Broker from "../components/Broker";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Stats from "../components/Stats";
import Footer from "../components/Footer";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import Cta from "../components/Cta";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Broker />
      <YoutubeVideo videoId="1oDhFnkiRRo" />
      <Features />
      <Pricing />
      <Testimonials />
      <Cta />
      <Footer />
    </>
  );
}
