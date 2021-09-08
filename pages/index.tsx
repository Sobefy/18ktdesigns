import Header from "../components/CreateCustomRing/Header";
import Hero from "../components/Home/Hero";
import Services from "../components/Home/Services";
import CTA from "../components/Home/CTA/CTA";
import CTACollage from "../components/Home/CTACollage";
import Newsletter from "../components/Home/NewsLetter/Newsletter";
import Footer from "@components/Home/Footer";
import Testimonials from "../components/Home/Testimonials";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Testimonials />
      <CTA />
      <CTACollage />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
